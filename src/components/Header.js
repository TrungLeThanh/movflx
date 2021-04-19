import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from './Button';

const Header = () =>{

    const [headerSticky, setHeaderSticky] = useState(false);

    const changeHeader = () =>{
        if(window.scrollY>=100){
            setHeaderSticky(true);
        }
        else{
            setHeaderSticky(false);
        }
    };

    window.addEventListener('scroll', changeHeader);

    return(
        <header className={`header ${headerSticky ? 'header__sticky' : ''}`}>
            <div className="header__logo">
                <Link to="/">
                    <img src="logo.png" id="logo" alt=""/>
                </Link>
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
                <i style={{ color: '#fff'}} className="fas fa-search" />
                <span style={{ color: '#bcbcbc', fontSize: '17px', padding: '0 10px 0 20px' }}>|</span>
                <i style={{ color: 'rgb(228, 216, 4)'}} className="fas fa-globe-europe" />
                <span style={{ color: '#fff', paddingLeft: '7px', paddingRight: '20px'}}>EN</span>
                <Button size="medium" color="yellow" nameButton="SIGN IN" />
            </div>
        </header>
    );
};

export default Header;
