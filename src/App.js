import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Todo from './component/Todo/Todo'
import Header from './component/Header/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './component/About/About';

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta
            http-equiv="Content-Security-Policy"
            content="
            default-src 'self';
            script-src 'self' 'unsafe-inline';
            style-src 'self' 'unsafe-inline' 'https://fonts.googleapis.com' 'https://fonts.gstatic.com';
            font-src 'self' 'https://fonts.googleapis.com' 'https://fonts.gstatic.com';
            "
          />
        </Helmet>
        <Router>
          <Header />
          <Routes>
            <Route path='/' exact Component={Todo} />
            <Route path='/about' Component={About} />
          </Routes >
        </Router>

      </>
    )



  }
}

export default App