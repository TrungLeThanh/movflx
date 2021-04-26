import React from 'react';
import './Footer.css';

const Footer = () =>{
    return (
        <div className="wrap-footer">
            <div className="wrap-footer-up">
                <div className="wrap-footer-up-logo">
                    <img src="logo.png" alt="" id="logo-footer"/>
                </div>
                <div className="wrap-footer-up-search">
                    <div className="ui icon input">
                        <i style={{ color: 'rgb(228, 216, 4)'}} className="search icon"></i>
                        <input id="inp-ft" type="text" placeholder="Find Favorate Movie" />
                    </div>
                </div>
            </div>
            <div className="wrap-footer-down">
                <div className="wrap-footer-down-list">
                    <ul>
                        <li>
                            FAQ
                        </li>
                        <li className="style-li">
                            HELP
                        </li>
                        <li className="style-li">
                            TERMA USE
                        </li>
                        <li className="style-li">
                            PRIVACY
                        </li>
                    </ul>
                </div>
                <div className="wrap-footer-down-social">
                    <button id="hihi" className="ui circular icon button style-btn-ci">
                        <i className="fab fa-facebook-f" />
                    </button>
                    <button id="hihi" className="ui circular icon button style-btn-ci">
                        <i className="fab fa-twitter" />
                    </button>
                    <button id="hihi" className="ui circular icon button style-btn-ci">
                        <i className="fab fa-pinterest" />
                    </button><button id="hihi" className="ui circular icon button style-btn-ci">
                        <i className="fab fa-linkedin-in" />
                    </button>
                </div>
            </div>
            <p style={{position: 'relative ', textAlign: 'center', bottom: '-67px', color: 'rgb(118, 118, 118)'}}>Copyright © 2021.</p>
        </div>
    );
};

export default Footer;
