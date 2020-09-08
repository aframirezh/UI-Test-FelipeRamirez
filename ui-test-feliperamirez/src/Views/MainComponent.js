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
                <FooterComponent/>
            </div>
        </div>
      )
    }
  }
  
  export default MainComponent;