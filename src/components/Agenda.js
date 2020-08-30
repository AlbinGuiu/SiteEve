import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';


class Agenda extends Component {
  render () {
    return (
      <div className="Agenda">
        <Header />
        <div className="Temporaire5"></div>
        <Footer />
      </div>
    );
  }
}

export default Agenda;