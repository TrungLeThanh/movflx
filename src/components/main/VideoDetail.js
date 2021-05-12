import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchMovieById} from '../../actions/index';
import MovieDetail from '../MovieDetail';

const VideoDetail = (props) =>{

    useEffect(() =>{
        props.fetchMovieById(props.match.params.id);
    })

    return (
        <div className="wrap-video-detail">
            <MovieDetail
                poster={props.movieId.poster_path}
                title={props.movieId.title}
                status={props.movieId.status}
                runtime={props.movieId.runtime}
            />
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {movieId: state.movieById};
};

export default connect(mapStateToProps, {fetchMovieById}) (VideoDetail);
