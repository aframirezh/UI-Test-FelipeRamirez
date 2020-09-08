import React, { Component } from 'react';
import './styles.scss';

class VoteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: ''
        }
        this.addVote = this.addVote.bind(this);
    }

    addVote(id) {

        console.log("vote good", id);

        let data = {
            id: id,
            good: 0,
            bad: 0
        };

        var postulate = localStorage.getItem(id) == null ? data : JSON.parse(localStorage.getItem(id));
        postulate.good += 1;
        localStorage.setItem(id, JSON.stringify(postulate));
    }

    render() {
        const postulatesId = this.props;
        return (
            <div>
                <div className="middle">
                    <label className="order-left">
                        <input type="radio" name="radio" value="good" />
                        <div className="vote-good box-vote">
                            <span className="oi oi-thumb-up"></span>
                        </div>
                    </label>
                    <label className="order-left">
                        <input type="radio" name="radio" value="bad"/>
                        <div className="good-bad box-vote">
                            <span className="oi oi-thumb-down box-bad-down"></span>
                        </div>
                    </label>
                    <label className="order-left">
                        <button onClick={() => this.addVote(postulatesId.id)} className="button">Vote now</button>
                    </label>
                </div>
            </div>
        );
    }
}

export default VoteButton