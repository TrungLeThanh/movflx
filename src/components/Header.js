import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from './Button';

const Header = () =>{
    return(
        <header className="header">
            <div className="header__logo">
                <img src="logo.png" id="logo" alt=""/>
            </div>
            <div className="header__list">
                <Link to="/" className="header__item">
                    HOME
                </Link>
                <Link to="/" className="header__item">
                    MOVIE
                </Link>
                <Link to="/" className="header__item">
                    TV SHOW
                </Link>
                <Link to="/" className="header__item">
                    PRICING
                </Link>
                <Link to="/" className="header__item">
                    BLOG
                </Link>
                <Link to="/" className="header__item">
                    CONTACTS
                </Link>
            </div>
            <div className="header__bonus">
                <i style={{ color: '#fff'}} class="fas fa-search" />
                <span style={{ color: '#bcbcbc', fontSize: '17px', padding: '0 10px 0 20px' }}>|</span>
                <i style={{ color: 'rgb(228, 216, 4)'}} class="fas fa-globe-europe" />
                <span style={{ color: '#fff', paddingLeft: '7px'}}>EN</span>
                <Button size="small" color="yellow" />
            </div>
        </header>
    );
};

export default Header;
