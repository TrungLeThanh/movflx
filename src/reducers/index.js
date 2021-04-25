import { combineReducers } from 'redux';
import fetchMovieHome from './fetchMovieHome';
import fetchMovieTopRate from './fetchMovieTopRate';
import fetchTVTopRate from './fetchTVTopRate';
import fetchTVPopular from './fetchTVPopular';

export default combineReducers({
    movie: fetchMovieHome,
    moviesTopRate: fetchMovieTopRate,
    tvTopRate: fetchTVTopRate,
    tvPopular: fetchTVPopular
});