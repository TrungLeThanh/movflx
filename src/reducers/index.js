import { combineReducers } from 'redux';
import fetchMovieHome from './fetchMovieHome';

export default combineReducers({
    movie: fetchMovieHome
});