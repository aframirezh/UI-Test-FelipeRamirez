import React, { Component } from 'react';
import './MessageComponent.scss';


class MessageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profilesInfo: [],
            isShow : true 
        };
    }

    hideMessage(){
        this.setState({
            isShow : false
        });
    }

    render() {
        return (
            <div className={this.state.isShow ? "container-message" : "container-message-show"} >
                <div className="grid-message message light center">
                    <p>Speak out. Be heard
                        <strong className="regular"> Be count</strong>
                    </p>
                </div>
                <div className="grid-message message-details light center">
                    <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak
                    freely. it's easy: You share you opinion, we analyze and put the data in a public report.
                        </p>
                </div>
                <div className="grid-message message-button center">
                    <a className="oi oi-x" onClick={ () => this.hideMessage() }></a>
                </div>
            </div>
        );
    }
}

export default MessageComponent;