import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <div className="Temporaire"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
