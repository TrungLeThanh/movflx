import React from 'react';
import './Trial.css';

const Trial = () =>{
    return (
        <div className="wrap-trial">
            <div className="wrap-trial-left">
                <h4>TRIAL START FIRST 30 DAYS.</h4>
                <p>Enter your email to create or restart your membership.</p>
            </div>
            <div className="wrap-trial-right">
                <div className="ui large action input">
                    <input id="inp-trial" type="text" placeholder="Enter your email..." />
                    <button className="ui black button">SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Trial;