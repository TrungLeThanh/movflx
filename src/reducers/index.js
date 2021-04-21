import { combineReducers } from 'redux';
import fetchMovie from './fetchMovie';

export default combineReducers({
    movie: fetchMovie
});