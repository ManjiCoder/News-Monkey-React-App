import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize = 40;
  // API_KEY = "ec7735c4db74410f90ffeffaaa8bd570"; //  My ApiKey
  API_KEY = "e93da7be7e134c76afa08f33b2b2b96b"; //  My ApiKey
  state = ({ progress: 0 })
  setProgress = (UpdateProgress) => {
    this.setState({ progress: UpdateProgress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar title='NewsMonkey' />

          {/* Top Loading Bar */}
          <LoadingBar
            color='#f11946'
            height={2.5}
            progress={this.state.progress}
            UpdateProgressBar={this.setProgress}
          />

          <Routes>
            <Route path='/' element={
              <News
                title='NewsMonkey'
                category={"general"}
                API_KEY={this.API_KEY}
                pagesize={this.pagesize}
                badgeColor={"dark"}
                UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/general' element={
              <News key={"general"}
                title='NewsMonkey'
                category={"general"}
                API_KEY={this.API_KEY}
                pagesize={this.pagesize}
                badgeColor={"dark"}
                UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/business' element={
              <News key={"business"}
                title='NewsMonkey'
                category={"business"}
                API_KEY={this.API_KEY}
                pagesize={this.pagesize}
                badgeColor={"success"}
                UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/entertainment' element={
              <News key={"entertainment"}
                title='NewsMonkey'
                category={"entertainment"}
                API_KEY={this.API_KEY}
                pagesize={this.pagesize}
                badgeColor={"primary"}
                UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/health' element={
              <News key={"health"}
                title='NewsMonkey'
                category={"health"}
                API_KEY={this.API_KEY}
                pagesize={this.pagesize}
                badgeColor={"danger"}
                UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/science' element={
              <News key={"science"}
                title='NewsMonkey'
                category={"science"}
                API_KEY={this.API_KEY}
                pagesize={this.pagesize}
                badgeColor={"info"}
                UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/sports' element={
              <News key={"sports"}
                title='NewsMonkey'
                category={"sports"}
                API_KEY={this.API_KEY}
                pagesize={this.pagesize}
                badgeColor={"success"}
                UpdateProgressBar={this.setProgress}
              />
            } />

            <Route path='/technology' element={
              <News key={"technology"}
                title='NewsMonkey'
                category={"technology"}
                API_KEY={this.API_KEY}
                pagesize={this.pagesize}
                badgeColor={"dark"}
                UpdateProgressBar={this.setProgress}
              />
            } />

          </Routes>

        </Router>
      </div>
    )
  }
}