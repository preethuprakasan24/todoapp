import React, { Component } from 'react'
import Todo from './component/Todo/Todo'
import Header from './component/Header/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './component/About/About';

class App extends Component {
  render() {
    return (
      <>

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