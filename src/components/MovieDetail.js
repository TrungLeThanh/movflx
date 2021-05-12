import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({poster, title, status, runtime}) =>{
    return (
        <div className="wrap-movie-detail">
            <div className="movie-detail-left">
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
                    <span style={{ color: '#fff', paddingLeft: '15px' }}>
                        Romance, Drama 
                        <i style={{ color: 'rgb(228, 216, 4)', paddingLeft: '20px', paddingRight: '10px'}} className="far fa-calendar-alt" />2021 
                        <i style={{ color: 'rgb(228, 216, 4)', paddingLeft: '20px', paddingRight: '10px'}} className="far fa-clock" />{runtime} min
                    </span>
                </span>
            </div>
        </div>
    );
};

export default MovieDetail;