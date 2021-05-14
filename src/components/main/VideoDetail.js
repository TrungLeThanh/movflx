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
                overview={props.movieId.overview}
                date={props.movieId.release_date}
                tagline={props.movieId.tagline}
                homepage={props.movieId.homepage}
            />
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {movieId: state.movieById};
};

export default connect(mapStateToProps, {fetchMovieById}) (VideoDetail);
