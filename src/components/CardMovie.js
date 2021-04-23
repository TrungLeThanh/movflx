import React from 'react';
import './CardMovie.css';

const CardMovie = ({title, poster}) =>{
    return(
        <>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 style">
            <div className="ui cards">
                <div className="card">
                    <div className="image">
                        <img src={`http://image.tmdb.org/t/p/w300/${poster}`} alt="Poster Film" style={{height: '350px', width: '100%'}} />
                    </div>
                </div>
            </div>
            <p style={{color: '#fff'}}>{title}</p>
        </div>
        </>
    );
};


export default CardMovie;
