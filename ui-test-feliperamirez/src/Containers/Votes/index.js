import React, { Component } from 'react';
import './styles.scss';
import Card from '../Card';

const postulates = require("../../db.json");

var data = localStorage.getItem('postulates') == null ? postulates : JSON.parse(localStorage.getItem('postulates'));

class Votes extends Component {

    state = { profiles: data }
    render() {
        return (
            <div className='container-votes'>
                {this.state.profiles.map(profile => <Card key={profile.id} {...profile} />)}
            </div>
        );
    }
}

export default Votes;