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
  // country = "in"          //  THESE ARE REQUIED IN API_KEY
  pagesize = 20;
  // API_KEY = "ec7735c4db74410f90ffeffaaa8bd570"; //  My ApiKey
  API_KEY = "e93da7be7e134c76afa08f33b2b2b96b"; //  My ApiKey
  render() {
    return (
      <div>
        <Router>
          <Navbar title="NewsMonkey" />

          <Routes>
            <Route path='/' element={
              <News
                title="NewsMonkey"
                pabadgeColor={"dark"}gesize={this.pagesize}  
                badgeColor={"dark"}
                category={"general"}
                API_KEY = {this.API_KEY}
                // apiUrl={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.props.category}&apikey=${this.API_KEY}`}
              />
            } />

            <Route path='/general' element={
              <News key={"general"}
                title="NewsMonkey"
                pagesize={this.pagesize}
                badgeColor={"dark"}
                category={"general"}
                API_KEY = {this.API_KEY}
                // apiUrl={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apikey=${this.API_KEY}`}
              />
            } />

            <Route path='/business' element={
              <News key={"business"}
                title="NewsMonkey"
                pagesize={this.pagesize}
                badgeColor={"success"}
                category={"business"}
                API_KEY = {this.API_KEY}
                // apiUrl={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=business&apikey=${this.API_KEY}`}
              />
            } />

            <Route path='/entertainment' element={
              <News key={"entertainment"}
                title="NewsMonkey"
                pagesize={this.pagesize}
                badgeColor={"primary"}
                category={"entertainment"}
                API_KEY = {this.API_KEY}
                // apiUrl={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=entertainment&apikey=${this.API_KEY}`}
              />
            } />

            <Route path='/health' element={
              <News key={"health"}
                title="NewsMonkey"
                pagesize={this.pagesize}
                badgeColor={"danger"}
                category={"health"}
                API_KEY = {this.API_KEY}
                // apiUrl={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=health&apikey=${this.API_KEY}`}
              />
            } />

            <Route path='/science' element={
              <News key={"science"}
                title="NewsMonkey"
                pagesize={this.pagesize}
                badgeColor={"info"}
                category={"science"}
                API_KEY = {this.API_KEY}
                // apiUrl={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=science&apikey=${this.API_KEY}`}
              />
            } />

            <Route path='/sports' element={
              <News key={"sports"}
                title="NewsMonkey"
                pagesize={this.pagesize}
                badgeColor={"success"}
                category={"sports"}
                API_KEY = {this.API_KEY}
                // apiUrl={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=sports&apikey=${this.API_KEY}`}
              />
            } />

            <Route path='/technology' element={
              <News key={"technology"}
                title="NewsMonkey"
                pagesize={this.pagesize}
                badgeColor={"dark"}
                category={"technology"}
                API_KEY = {this.API_KEY}
                // apiUrl={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=technology&apikey=${this.API_KEY}`}
              />
            } />

          </Routes>

        </Router>
      </div>
    )
  }
}