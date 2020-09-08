import React, { Component } from 'react';
import HeaderComponent from '../Components/FooterComponent'
import FooterComponent from '../Components/FooterComponent'
import MessageComponent from '../Components/Message/MessageComponent';
import CardComponent from '../Containers/CardComponent'
import './MainComponent.scss';

const testData = [{
    id: 1,
    name: "Pope Francis",
    timeHere: "",
    description: "He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)",
    image_url: "../Components/images/KanyeWest.jpg",
    cardFlag: true,
    wikiLink:"More information",
    veredictMessage: "What's Your Verdict"
  }]
  
  class MainComponent extends Component {
    state = { profiles: testData }
    render () {
      return (
        <div>
            <div className="bgImg">
              <HeaderComponent/>
              {this.state.profiles.map(profile => <CardComponent key={profile.id} {...profile} />)}
               <div className="bgImg__progressDate">
                  <div className="progressTime">
                    <p className="progressTime__closing">Closing</p>
                  </div>
                  <div className="progressTime">
                    <p className="progressTime__days">22 days</p>
                  </div>
              </div> 
            </div>
            <MessageComponent/>
            <h2>Votes</h2>
            <FooterComponent/>
        </div>
      )
    }
  }
  
  export default MainComponent;