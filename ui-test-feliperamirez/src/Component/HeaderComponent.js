import React from 'react';
import magnify from '../images/magnify.png';
import './HeaderComponent.scss';

function HeaderComponent () {
  return (
    <header>
      <div className="child">
        <h2>Rule of Thumb.</h2>
      </div>
      <ul className="child">
        <li><a href="#">Past Trials</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Log In/Sign Up</a></li>
      </ul>

      <div className="child">
        <img src={magnify} id="magnify" ></img>
        <input type="text" name="search" id="search"></input>
      </div>
    </header>
  );
}

export default HeaderComponent;