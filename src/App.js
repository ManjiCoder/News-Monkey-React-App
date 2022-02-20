import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  c = 'manji'
  render() {
    return (
      <>
        <Navbar title="NewsMonkey" about="About NewsMonkey" />
        <News title="NewsMonkey" pagesize = "12" apikey="https://newsapi.org/v2/top-headlines?country=in&apiKey=ec7735c4db74410f90ffeffaaa8bd570" />
      </>
    )
  }
}