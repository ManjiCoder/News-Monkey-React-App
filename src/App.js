import './App.css';

import React, { useState } from 'react'
// import Navbar from './Components/Navbar';
import News from './Components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

function App() {
  let pagesize = 30;
  let API_KEY = process.env.REACT_APP_NEWS_API_KEY; //  Custom Local Environment Variables - API_Key is stored inside .env.local File
  // let API_KEY = "ec7735c4db74410f90ffeffaaa8bd570"  // My API_KEY
  // let API_KEY = "e93da7be7e134c76afa08f33b2b2b96b"  // Other API_KEY
  const [progress, setProgress] = useState(0)
  const setProgressBar = (UpdateProgress) => {
    setProgress(UpdateProgress)
  }


  return (
    <div>
      <Router>
        {/* <Navbar title='NewsMonkey' getSearchText={getSearchText}/> */}
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
            />
          } />

        </Routes>

      </Router>
    </div>
  )

}

export default App