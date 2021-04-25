import React from 'react';
import './CardMovie.css';

const CardMovie = ({title, poster, release_date, vote_average}) =>{
    return(
        <>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 style">
            <div className="ui cards" data-aos="fade-right" data-aos-duration="1000">
                <div className="card">
                    <div className="image">
                        <img src={`http://image.tmdb.org/t/p/w300/${poster}`} alt="Poster Film" style={{height: '350px', width: '100%'}} />
                    </div>
                </div>
                <div className="card__content">
                    <p id="title">{title}</p>
                    <p style={{color: 'rgb(228, 216, 4)'}}>
                        {release_date} 
                    </p>
                    <p>
                        <span>
                            <div style={{ color: 'rgb(228, 216, 4)', background:'transparent', border: '1px solid #fff'}} className="ui basic label">
                                4K
                            </div>
                        </span>
                        <span style={{position: 'relative', paddingLeft: '10px'}}>
                            <i style={{color: 'rgb(228, 216, 4)'}} className="far fa-star" />
                            <span style={{color: '#fff', paddingLeft: '10px'}}>{vote_average}</span>
                            <i style={{color: 'rgb(228, 216, 4)', paddingLeft: '20px'}} className="far fa-clock" />
                            <span style={{color: 'rgb(228, 216, 4)', paddingLeft: '10px'}}>128 min</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};


export default CardMovie;
