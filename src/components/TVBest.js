import React from 'react';
import './TVBest.css';
import ListTVPopular from './listMovies/ListTVPopular';

const TVBest = () =>{

    return (
        <div className="wrap-rate-movie">
            <div className="rate-title">
                <p>BEST TV SERIES</p>
                <h2>World Best TV Series</h2>
            </div>
            <ListTVPopular />
        </div>
    );
};

export default TVBest;
