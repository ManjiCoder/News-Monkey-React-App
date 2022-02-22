import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  country = "in"          //  THESE ARE REQUIED IN API_KEY
  // category = "general"     //  Now This line is giving error THESE ARE REQUIED IN API_KEY
  render() {
    return (
      <div>
        <Router>
          <Navbar title="NewsMonkey" />

          <Routes>
            <Route path='/' element={
              <News key={"general"}
                title="NewsMonkey"
                pagesize={12}
                apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=general&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
              />
            } />

            <Route path='/general' element={
              <News key={"general"}
                title="NewsMonkey"
                pagesize={12}
                apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=general&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
              />
            } />

            <Route path='/business' element={
              <News key={"business"}
                title="NewsMonkey"
                pagesize={12}
                apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=business&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
              />
            } />

            <Route path='/entertainment' element={
              <News key={"entertainment"}
                title="NewsMonkey"
                pagesize={12}
                apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=entertainment&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
              />
            } />

            <Route path='/health' element={
              <News key={"health"}
                title="NewsMonkey"
                pagesize={12}
                apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=health&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
              />
            } />

            <Route path='/science' element={
              <News key={"science"}
                title="NewsMonkey"
                pagesize={12}
                apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=science&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
              />
            } />

            <Route path='/sports' element={
              <News key={"sports"}
                title="NewsMonkey"
                pagesize={12}
                apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=sports&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
              />
            } />

            <Route path='/technology' element={
              <News key={"technology"}
                title="NewsMonkey"
                pagesize={12}
                apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=technology&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
              />
            } />

          </Routes>

        </Router>
      </div>
    )
  }
}