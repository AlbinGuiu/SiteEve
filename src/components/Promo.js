import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';


class Promo extends Component {
  render () {
    return (
      <div className="Promo">
        <Header />
        <div className="Temporaire3"></div>
        <Footer />
      </div>
    );
  }
}

export default Promo;