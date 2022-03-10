import './App.css';

import React, { useState } from 'react'
// import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

function App () {
  let pagesize = 12;
  // let API_KEY = process.env.REACT_APP_NEWS_API_KEY; //  Custom Local Environment Variables - API_Key is stored inside .env.local File
  let API_KEY = "ec7735c4db74410f90ffeffaaa8bd570"  // My API_KEY
  // let API_KEY = "e93da7be7e134c76afa08f33b2b2b96b"  // Other API_KEY
  const [progress, setProgress] = useState(0)
  const setProgressBar = (UpdateProgress) => {
      setProgress(UpdateProgress)
    }
  // pagesize = 80;
  // API_KEY = process.env.REACT_APP_NEWS_API_KEY; //  Custom Local Environment Variables - API_Key is stored inside .env.local File
  // state = ({ progress: 0 })
  // setProgress = (UpdateProgress) => {
  //   this.setState({ progress: UpdateProgress })
  // }

    return (
      <div>
        <Router>
          <Navbar title='NewsMonkey' />

          {/* Top Loading Bar */}
          <LoadingBar
            color='#f11946'
            height={2.5}
            progress={progress}
            // progress={this.state.progress}
          />

          <Routes>
            <Route path='/' element={
              <News
                title='NewsMonkey'
                category={"general"}
                badgeColor={"dark"}
                API_KEY={API_KEY}
                // API_KEY={this.API_KEY}
                pagesize={pagesize}
                // pagesize={this.pagesize}
                UpdateProgressBar={setProgressBar}
                // UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/general' element={
              <News key={"general"}
                title='NewsMonkey'
                category={"general"}
                badgeColor={"dark"}
                API_KEY={API_KEY}
                // API_KEY={this.API_KEY}
                pagesize={pagesize}
                // pagesize={this.pagesize}
                UpdateProgressBar={setProgressBar}
                // UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/business' element={
              <News key={"business"}
                title='NewsMonkey'
                category={"business"}
                badgeColor={"success"}
                API_KEY={API_KEY}
                // API_KEY={this.API_KEY}
                pagesize={pagesize}
                // pagesize={this.pagesize}
                UpdateProgressBar={setProgressBar}
                // UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/entertainment' element={
              <News key={"entertainment"}
                title='NewsMonkey'
                category={"entertainment"}
                badgeColor={"primary"}
                API_KEY={API_KEY}
                // API_KEY={this.API_KEY}
                pagesize={pagesize}
                // pagesize={this.pagesize}
                UpdateProgressBar={setProgressBar}
                // UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/health' element={
              <News key={"health"}
                title='NewsMonkey'
                category={"health"}
                badgeColor={"danger"}
                API_KEY={API_KEY}
                // API_KEY={this.API_KEY}
                pagesize={pagesize}
                // pagesize={this.pagesize}
                UpdateProgressBar={setProgressBar}
                // UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/science' element={
              <News key={"science"}
                title='NewsMonkey'
                category={"science"}
                badgeColor={"info"}
                API_KEY={API_KEY}
                // API_KEY={this.API_KEY}
                pagesize={pagesize}
                // pagesize={this.pagesize}
                UpdateProgressBar={setProgressBar}
                // UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/sports' element={
              <News key={"sports"}
                title='NewsMonkey'
                category={"sports"}
                badgeColor={"success"}
                API_KEY={API_KEY}
                // API_KEY={this.API_KEY}
                pagesize={pagesize}
                // pagesize={this.pagesize}
                UpdateProgressBar={setProgressBar}
                // UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/technology' element={
              <News key={"technology"}
                title='NewsMonkey'
                category={"technology"}
                badgeColor={"dark"}
                API_KEY={API_KEY}
                // API_KEY={this.API_KEY}
                pagesize={pagesize}
                // pagesize={this.pagesize}
                UpdateProgressBar={setProgressBar}
                // UpdateProgressBar={this.setProgress}
              />
            } />

          </Routes>

        </Router>
      </div>
    )

}

export default  App