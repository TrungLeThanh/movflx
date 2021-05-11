import React, {useEffect, useState} from 'react';
import './VideoDetail.css';
import { connect } from 'react-redux';
import {fetchMovieById} from '../../actions/index';

const VideoDetail = (props) =>{

    useEffect(() =>{
        props.fetchMovieById(props.match.params.id);
    })

    return (
        <div className="wrap-video-detail">
            <p>title: {props.movieId.title}</p>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {movieId: state.movieById};
};

export default connect(mapStateToProps, {fetchMovieById}) (VideoDetail);
