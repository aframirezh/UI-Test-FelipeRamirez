import React, { Component } from 'react';
import '../../Containers/Card/styles.scss';
import VoteButton from '../VoteButton';

class Postulates extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const info = this.props;

        var head = (
            <div>
                <section>
                    <p>
                        <small className="thin">What's your opinion on</small>
                        <br />
                        <strong className="box-tittle-size regular">{info.name}</strong>
                    </p>
                    <p className="box-content-size light test-head-des">{info.description}</p>
                    <p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Wikipedia%27s_W.svg"
                            alt="wikipedia" className="wiki" />
                        <a href="#wiki">
                            More information
                            </a>
                    </p>
                    <p className="box-content-size regular">What's Your Verdict?</p>
                </section>
            </div>
        );

        var card = (
            <section>
                <p>
                    <strong className="box-tittle-votes-size regular">{info.name}</strong>
                </p>
                <p className="thin">
                    {info.timeHere}
                </p>
                <p className="regular">{info.description}</p>
                <VoteButton id={info.id}/>
            </section>
        );

        return (
            <div>
                {info.cardFlag ? head : card}
            </div>
        );
    }
}

export default Postulates;