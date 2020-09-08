import React, { Component } from 'react';
import HeaderComponent from '../Components/FooterComponent'
import FooterComponent from '../Components/FooterComponent'
import './MainComponent.scss';

class MainComponent extends Component {
    render () {
      return (
        <div>
            <div className="bgImg">
                <HeaderComponent/>
                <div className="bgImg__progressDate">
                  <div className="progressTime">
                    <p className="progressTime__closing">Closing</p>
                  </div>
                  <div className="progressTime">
                    <p className="progressTime__days">22 days</p>
                  </div>
                 </div> 
            </div>
            <h2>Votes</h2>
            <FooterComponent/>
        </div>
      )
    }
  }
  
  export default MainComponent;