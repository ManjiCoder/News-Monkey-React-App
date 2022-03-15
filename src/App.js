import './App.css';

import React, { useState } from 'react'
// import Navbar from './Components/Navbar';
import { Link } from "react-router-dom"

import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

function App() {
  let pagesize = 100;
  let country = 'in'
  let API_KEY = process.env.REACT_APP_NEWS_API_KEY; //  Custom Local Environment Variables - API_Key is stored inside .env.local File
  // let API_KEY = "ec7735c4db74410f90ffeffaaa8bd570"  // My API_KEY
  // let API_KEY = "e93da7be7e134c76afa08f33b2b2b96b"  // Other API_KEY
  const [progress, setProgress] = useState(0)
  const setProgressBar = (UpdateProgress) => {
    setProgress(UpdateProgress)
  }

  // For Navbar
  let title = "NewMonkey"
  const [searchText, setsearchText] = useState('')
  const handleOnChange = (e) => {
    setsearchText(e.target.value)
  }
  const handleOnClick = () => {
    console.log(typeof(searchText))
    console.log(searchText);
  }
  return (
    <div>
      <Router>
        {/* <Navbar title='NewsMonkey' /> */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{title}</Link>
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
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText.toString()} onChange={handleOnChange} />
              <button disabled={searchText.length === 0} className="btn btn-outline-success" type="button" onClick={handleOnClick}><Link className='text-decoration-none text-light' to={searchText}>Search</Link></button>
            </form>
          </div>
        </nav>

        {/* Top Loading Bar */}
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />

        <Routes>
          <Route path='/' element={
            <News
              title='NewsMonkey'
              category={"general"}
              badgeColor={"dark"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/top-headlines?country=${country}&category=general&`}
            />
          } />

          {/* <Route path='chess' element={
            <News key={"chess"}
              title={`NewsMonkey`}
              category={'chess'}
              badgeColor={"dark"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/everything?q=chess&from=2022-02-15&sortBy=publishedAt`}
            />
          } /> */}

          <Route path={`/${searchText}`} element={
            
            <News key={"searchText"}
              title={`NewsMonkey`}
              category={searchText}
              badgeColor={"primary"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/everything?q=${searchText}&from=2022-02-15&sortBy=publishedAt`}
            />
          } />

          <Route path='/business' element={
            <News key={"business"}
              title='NewsMonkey'
              category={"business"}
              badgeColor={"success"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/top-headlines?country=${country}&category=business&`}
            />
          } />

          <Route path='/entertainment' element={
            <News key={"entertainment"}
              title='NewsMonkey'
              category={"entertainment"}
              badgeColor={"primary"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&`}
            />
          } />

          <Route path='/health' element={
            <News key={"health"}
              title='NewsMonkey'
              category={"health"}
              badgeColor={"danger"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/top-headlines?country=${country}&category=health&`}
            />
          } />

          <Route path='/science' element={
            <News key={"science"}
              title='NewsMonkey'
              category={"science"}
              badgeColor={"info"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/top-headlines?country=${country}&category=science&`}
            />
          } />

          <Route path='/sports' element={
            <News key={"sports"}
              title='NewsMonkey'
              category={"sports"}
              badgeColor={"success"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/top-headlines?country=${country}&category=sports&`}
            />
          } />

          <Route path='/technology' element={
            <News key={"technology"}
              title='NewsMonkey'
              category={"technology"}
              badgeColor={"dark"}
              API_KEY={API_KEY}
              pagesize={pagesize}
              UpdateProgressBar={setProgressBar}
              url={`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&`}
            />
          } />

        </Routes>

      </Router>
    </div>
  )

}

export default App