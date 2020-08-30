import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render () {
    return (
      <div className="Footer">
        <footer>
          <p>Made by Eve</p>
          <p className="copyright"><i class='fas fa-copyright'></i>  Copyright 2020</p>
        </footer>
      </div>
    );
  }
}

export default Footer;