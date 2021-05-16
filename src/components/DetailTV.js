import React from 'react';
import './MovieDetail.css';
import {Link} from 'react-router-dom';

const DetailTV = ({poster, title, status, runtime, overview, tagline}) =>{
    return (
        <div className="wrap-movie-detail">
            <div className="movie-detail-left">
                <Link to="/" style={{color: '#fff', position: 'absolute', top: '142px'}} className="fas fa-arrow-left" />
                <img src={`http://image.tmdb.org/t/p/w300/${poster}`} alt="Poster Film" style={{height: '430px', width: '315px', borderRadius: '10px'}} />
            </div>
            <div className="movie-detail-right">
                <h5>{status}</h5>
                <h2>{title}</h2>
                <span>
                    <div className="ui label">
                        PG 18
                    </div>
                    <div className="ui basic label">
                        HD
                    </div>
                    <span id="run" style={{ color: '#fff', paddingLeft: '15px' }}>
                        <span id="dramma">Romance, Drama </span>
                        <i style={{ color: 'rgb(228, 216, 4)', paddingLeft: '20px', paddingRight: '10px'}} className="far fa-calendar-alt" />2021 
                        <i style={{ color: 'rgb(228, 216, 4)', paddingLeft: '20px', paddingRight: '10px'}} className="far fa-clock" />{runtime} min
                    </span>
                </span>
                <p>{overview}</p>
                <h6>Tagline : <span style={{ color: 'rgb(228, 216, 4)'}}>{tagline ? tagline : "..."}</span></h6>
                <div className="right-segment">
                    <div className="share">
                        <i style={{fontSize: '16px'}} className="fas fa-share-alt"><span style={{paddingLeft: '10px'}}>Share</span></i>
                    </div>
                    <div className="hi">
                        <p>Prime Video</p> 
                    </div>
                    <div className="other">
                        <button id="c" className="big ui button"><i style={{paddingRight: '10px'}} className="fas fa-play" /> <span style={{fontSize: '12px'}}>WATCH NOW</span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTV;