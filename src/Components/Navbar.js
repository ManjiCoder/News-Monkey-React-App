import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


function Navbar(props) {
  const [searchText, setSearchText] = useState('')
  const handleOnChange = (e) => {
    setSearchText(e.target.value)
    // console.log(e.target.value);
  }
  const handleOnClick = () => {
    console.log('click '+ searchText);
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="text" value={searchText} onChange={handleOnChange} placeholder="Search" aria-label="Search" />
            <button disabled={searchText.length === 0} className="btn btn-outline-success" type="button" onClick={handleOnClick} >Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
Navbar.propTypes = {
  title: PropTypes.string,
  getSearchText:PropTypes.func
}