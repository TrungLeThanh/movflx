import  React, { Fragment, useEffect } from 'react';
import CardMovie from '../CardMovie';
import './style.css';
import { fetchMovieHome } from '../../actions/index';
import {connect} from 'react-redux';

const ListSearch = (props) =>{
    useEffect(() =>{
        props.fetchMovieHome(props.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);


    
    const renderListMovie = () =>{
        if(props.movies.length === 0){
            return (
                <div style={{marginLeft: '25px'}} className="ui red bottom attached warning message">
                    <i className="warning icon"></i>
                    Oh no, oh no, oh no no no no no!
                </div>
            );
        }
        return props.movies.map(movie=>{
            return (
                <Fragment key={movie.id}>
                    <CardMovie 
                        id={movie.id}
                        title={movie.title} 
                        poster={movie.poster_path} 
                        release_date={movie.release_date} 
                        vote_average={movie.vote_average}
                        onClick={()=>test}
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

const mapStateToProps = (state) =>{
    return {movies: state.movie}
}


export default connect(mapStateToProps, {fetchMovieHome}) (ListSearch);
