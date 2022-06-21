import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
import UseContext from '../Context/UseContext';


function Navbar(props) {
  const [text, setText] = useState('');         // For setting Text
  const { setQuery } = useContext(UseContext);  // For setting useContext

  return (
    <nav className="navbar position-sticky top-0 navbar-expand-lg navbar-dark bg-dark" style={{ "zIndex": 1 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/business">business</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/entertainment">entertainment</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/health">health</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/science">science</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/sports">sports</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/technology">technology</NavLink></li>
          </ul>
          <form className="d-flex mb-2 mb-lg-0" onSubmit={(event) => { event.preventDefault() }}>
            <input className="form-control me-2" id='search' type="search" placeholder="Search" aria-label="Search" value={text} onChange={(e) => setText(e.target.value)} />
            <Link className='text-decoration-none text-light' to={text}><button disabled={text.length === 0} className="btn btn-outline-success" type="submit" onClick={() => setQuery(text)}>Search</button></Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
Navbar.propTypes = {
  title: PropTypes.string,
  getText: PropTypes.func
}