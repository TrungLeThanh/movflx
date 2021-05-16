import React from 'react';
import './SearchBar.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {fetchMovieHome} from '../actions/index';

const SearchBar = (props) =>{

    console.log(props.movies)
    const onSubmit = (formValue) => {
        props.fetchMovieHome(formValue.key);
    }

    const renderInput = ({input}) =>{
        return <input id="search-input" {...input} placeholder="SEARCH FILMS" required />;
    }

    const renderSearch = () =>{
        return (
            <div className="search">
                <form className="ui form" onSubmit={props.handleSubmit(onSubmit)}>
                    <Field 
                        name="key" 
                        component={renderInput} 
                    />
                    <button style={{background: 'transparent', borderBottom: '1px solid #fff'}} className="ui grey button"><i className="fas fa-search" /></button>
                </form>
            </div>
        );
    };

    return( 
        <div className="wrap-search">
            {renderSearch()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.movie
    }
}

const formWrapper = reduxForm({
    form: 'search',
}) (SearchBar);


export default connect(mapStateToProps, {fetchMovieHome}) (formWrapper);
