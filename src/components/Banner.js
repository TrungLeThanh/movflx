import React from 'react';
import './Banner.css';

const Banner = () =>{
    return(
        <div className="wrap" >
            <div data-aos="fade-up" data-aos-duration="2500">
                <h6 > Movflx</h6>
                <h2>
                    Unlimited <span style={{ color: 'rgb(228, 216, 4)'}}>Movie</span>, TVs <br/>
                    Shows, & More.
                </h2>
                <span>
                    <div className="ui label">
                        PG 18
                    </div>
                    <div className="ui basic label">
                        HD
                    </div>
                    <span className="bonus">
                        Romance, Drama 
                        <i style={{ color: 'rgb(228, 216, 4)', paddingLeft: '20px', paddingRight: '10px'}} className="far fa-calendar-alt" />2021 
                        <i style={{ color: 'rgb(228, 216, 4)', paddingLeft: '20px', paddingRight: '10px'}} className="far fa-clock" />128 min
                    </span>
                </span>
                <div className="watch">
                    <button id="b" className="big ui button"><i style={{paddingRight: '10px'}} className="fas fa-play" /> <span style={{fontSize: '14px', letterSpacing: '1px'}}>WATCH NOW</span> </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
