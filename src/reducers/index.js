import { combineReducers } from 'redux';
import fetchMovieHome from './fetchMovieHome';
import fetchMovieTopRate from './fetchMovieTopRate';
import fetchTVTopRate from './fetchTVTopRate';
import fetchTVPopular from './fetchTVPopular';
import fetchById from './fetchById';
import fetchTVByID from './fetchTVByID';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    movie: fetchMovieHome,
    moviesTopRate: fetchMovieTopRate,
    tvTopRate: fetchTVTopRate,
    tvPopular: fetchTVPopular,
    movieById: fetchById,
    TVById: fetchTVByID,
    form: formReducer
});