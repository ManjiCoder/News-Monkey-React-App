import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "john";
  render() {
    return (
      <div>
        This App is made with class base Component {this.c}
      </div>
    )
  }
}