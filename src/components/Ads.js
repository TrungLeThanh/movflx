import React from 'react';
import './Ads.css';

const Ads = () => {
    return (
        <div className="wrap-ads">
            <div className="ads-left">
                <span className="ads-left-title">
                    <span className="style-ads-title">ONLINE STREAMING</span>
                </span>
                <br/>
                <h2>
                    Live Movie & TV Shows For <br /> Friends & Family
                </h2>
                <p>Lorem ipsum dolor sit amet, consecetur adipiscing 
                    elseddo eiusmod <br /> There are many variations of 
                    passages of lorem Ipsum available, but the <br />
                    majority have suffered alteration.</p>
                <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
                </p>
                <p>------------</p>
                <button id="a" className="large ui button"><i style={{paddingRight: '10px'}} className="fas fa-play" /> WATCH NOW</button>
            </div>
            <div className="ads-right" data-aos="fade-left" data-aos-duration="1500">
                <img id="ads-img" src="https://themebeyond.com/html/movflx/img/images/live_img.png" alt=""/>
            </div>
        </div>
    );
};

export default Ads;
