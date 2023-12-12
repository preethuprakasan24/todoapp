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
            <Route path='/TO-DO-APP' exact element={<Todo />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
