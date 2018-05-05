import React, { Component } from 'react';

import './App.css';

import Header from "./components/header";
import SideBar from "./components/sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar />
        <div>middle</div>
      </div>
    );
  }
}

export default App;
