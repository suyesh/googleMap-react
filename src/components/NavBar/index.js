import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills" role="tablist">
        <li className="active">
          <a href="#dashboard" role="tab" data-toggle="tab" aria-expanded="false">
            <i className="material-icons">search</i>
            Search
          </a>
        </li>
        <li className="">
          <a href="#tasks" role="tab" data-toggle="tab" aria-expanded="false">
            <i className="material-icons">list</i>
            Details
          </a>
        </li>
        <li className="">
          <a href="#schedule" role="tab" data-toggle="tab" aria-expanded="true">
            <i className="material-icons">autorenew</i>
            Clear Map
          </a>
        </li>
      </ul>
    );
  }
}

export default NavBar;
