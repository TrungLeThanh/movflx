import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from './Button';

const Header = () =>{

    const [headerSticky, setHeaderSticky] = useState(false);
    const [overlay, setOverlay] = useState(false);

    const changeHeader = () =>{
        if(window.scrollY>=100){
            setHeaderSticky(true);
        }
        else{
            setHeaderSticky(false);
        }
    };

    window.addEventListener('scroll', changeHeader);

    const onpenOverlay= () =>{
        setOverlay(true);
    }

    const closeOverlay= () =>{
        setOverlay(false);
    }

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
                <i style={{ color: 'rgb(228, 216, 4)', fontSize: '17px'}} className="fas fa-globe-europe" />
                <span style={{ color: '#fff', paddingLeft: '7px', paddingRight: '20px'}}>EN</span>
                <span id="login--button"><Button size="medium" color="yellow" nameButton="SIGN IN" /></span>
            </div>

            <label htmlFor="nav-mobile-input" onClick={closeOverlay} className={`${overlay ? 'header__overlay' : ''}`}> </label>

            <div className="menu">
                <div className="menu__select">
                    <label htmlFor="nav-mobile-input">
                        <i onClick={onpenOverlay} id="select" className="fas fa-bars" />
                    </label>
                    <input style={{display: 'none'}} type="checkbox" className="menu__input" id="nav-mobile-input"/>
                    <div className="menu__list">
                        <Link to="/">
                            <img src="logo.png" id="menu-logo" alt=""/>
                        </Link>
                        <label id="menu-close" htmlFor="nav-mobile-input"><i onClick={closeOverlay} className="fas fa-times" /></label>
                        <hr/>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-home" />HOME
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-compact-disc" />MOVIE
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-tv" />TV SHOW
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-tags" /> PRICING
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-blog" />BLOG
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-address-book" />CONTACTS
                        </Link>
                        <div className="menu__social">
                            <i class="fab fa-facebook-square menu__social--icon" />
                            <i class="fab fa-twitter menu__social--icon" />
                            <i class="fab fa-pinterest-square menu__social--icon" />
                            <i class="fab fa-youtube menu__social--icon" />
                            <i class="fab fa-instagram-square menu__social--icon" />
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;
