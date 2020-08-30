import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';


class Articles extends Component {
  render () {
    return (
      <div className="Articles">
        <Header />
        <div className="Temporaire2"></div>
        <Footer />
      </div>
    );
  }
}

export default Articles;