// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";

const helmet = require('helmet')
helmet({
  crossOriginResourcePolicy: false,
})
export default class App extends Component {
  // c = 'Apoorva'
    pageSize = 9
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          
          <Routes>
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country='in' category='business' />}></Route>
          <Route exact path="/entertainment" element = {<News key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
          <Route exact path="/health"  element = {<News key="health" pageSize={this.pageSize} country='in' category='health' />}></Route>
          <Route exact path="/science" element = {<News key="science" pageSize={this.pageSize} country='in' category='science' />}></Route>
          <Route exact path="/sports"  element = {<News key="sports" pageSize={this.pageSize} country='in' category='sports' />}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country='in' category='technology' />}></Route>
          <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country='in' category='general' />}></Route>
          <Route exact path='/general' element={<News key="general" pageSize={this.pageSize} country='in' category='general' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
