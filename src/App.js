import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  country = "us"          //  THESE ARE REQUIED IN API_KEY
  category = "general"     //  THESE ARE REQUIED IN API_KEY
  render() {
    return (
      <>
        <Navbar title="NewsMonkey" />
        <News
          title="NewsMonkey"
          pagesize={12}
          apikey={`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=ec7735c4db74410f90ffeffaaa8bd570`}
        />
      </>
    )
  }
}