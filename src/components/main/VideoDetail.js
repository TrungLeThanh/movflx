import React, {useEffect, useState} from 'react';
import './VideoDetail.css';
import { connect } from 'react-redux';
import {fetchMovieById} from '../../actions/index';
import MovieDetail from '../MovieDetail';

const VideoDetail = (props) =>{

    useEffect(() =>{
        props.fetchMovieById(props.match.params.id);
    })

    return (
        <div className="wrap-video-detail">
            <MovieDetail />
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {movieId: state.movieById};
};

export default connect(mapStateToProps, {fetchMovieById}) (VideoDetail);
