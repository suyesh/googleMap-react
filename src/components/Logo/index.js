import React from 'react';
import logo from './dot.png';
import './Logo.css';

class Logo extends React.Component {
  render() {
    return (
      <a href="https://nycda.com/" target="_blank"><img src={logo} alt="Main Logo" id="dot-logo"/></a>
    );
  }
}

export default Logo;
