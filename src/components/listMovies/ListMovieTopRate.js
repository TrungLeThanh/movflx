import  React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovieTopRate } from '../../actions';
import CardMovie from '../CardMovie';
import './style.css';

const ListMovieTopRate = ({ movies, fetchMovieTopRate }) =>{

    useEffect(() =>{
        fetchMovieTopRate();
    });

    const renderListMovie = () =>{
        return movies.slice(0, 8).map(movie=>{
            return (
                <Fragment key={movie.id}>
                    <CardMovie 
                        id={movie.id}
                        title={movie.title} 
                        poster={movie.poster_path} 
                        release_date={movie.release_date} 
                        vote_average={movie.vote_average}
                    />
                </Fragment>
            )
        })
    }

    return (
        <div className="row">
            {renderListMovie()}
        </div>
    );
    
};

const mapStateToProps = (state) =>({
    movies: state.moviesTopRate
});

export default connect(mapStateToProps, {fetchMovieTopRate}) (ListMovieTopRate);
