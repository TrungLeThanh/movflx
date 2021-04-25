import React, { useState } from 'react';
import './TopRateMovie.css';
import ListMovieTopRate from './listMovies/ListMovieTopRate';
import ListTVTopRate from './listMovies/ListTVTopRate';

const TopRateMovie = () =>{

    const [active, setActive] = useState(1);

    const renderList = () =>{
        if(active===1){
            return <ListMovieTopRate />;
        }
        return <ListTVTopRate />;
    }

    const onClickActive = () => setActive(1);
    const onClickActive1 = () => setActive(2);

    return (
        <div className="wrap-rate-movie">
            <div className="rate-title">
                <p>ONLINE STREAMING</p>
                <h2>Top Rated Movies</h2>
            </div>
            <div className="rate-btn">
                <button style={{borderRadius: '20px'}} onClick={onClickActive} className={`large ui inverted yellow ${active===1 ? '' : 'basic'} button`} ><i style={{paddingRight: '10px'}} className="fas fa-film" />Movie Top</button>
                <span style={{paddingBottom: '10px'}}></span>
                <button style={{borderRadius: '20px'}} onClick={onClickActive1} className={`large ui inverted yellow ${active===2 ? '' : 'basic'} button`}><i style={{paddingRight: '10px'}} className="fas fa-tv" />TV Show Top</button>
            </div>
            {renderList()}
        </div>
    );
};

export default TopRateMovie;
