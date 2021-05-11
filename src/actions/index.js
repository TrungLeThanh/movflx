import theMovieDB from '../apis/theMovieDB';
import { FETCH_MOVIE_HOME, FETCH_MOVIE_TOP_RATE, FETCH_TV_TOP_RATE, FETCH_TV_POPULAR, FETCH_MOVIE_BY_ID } from './types';
import _ from 'lodash';

const API_KEY = 'e4c74354ea589d45cce2ba3047a613c6';


export const fetchMovieHome = (typeMovie) => async (dispatch) => {
    _fetchMovieHome(typeMovie, dispatch);
}; 
export const _fetchMovieHome= _.memoize( async (typeMovie, dispatch) => {
    const response = await theMovieDB.get(`/search/movie?api_key=${API_KEY}&query=${typeMovie}&page=1`);
    dispatch({ type: FETCH_MOVIE_HOME, payload: response.data.results });
});

export const fetchMovieById = (id) => async (dispatch) => {
    _fetchMovieById(id, dispatch);
}
export const _fetchMovieById = _.memoize( async (id, dispatch) => {
    const response = await theMovieDB.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    dispatch({ type:FETCH_MOVIE_BY_ID, payload: response.data });
});

export const fetchMovieTopRate = () => async (dispatch) => {
    _fetchMovieTopRate(dispatch);
};
export const _fetchMovieTopRate = _.memoize( async (dispatch) => {
    const response = await theMovieDB.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch({ type: FETCH_MOVIE_TOP_RATE, payload: response.data.results });
}); 

export const fetchTVTopRate = () => async (dispatch) => {
    _fetchTVTopRate(dispatch);
};
export const _fetchTVTopRate = _.memoize( async (dispatch) =>  {
    const response = await theMovieDB.get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=2`);
    dispatch({ type: FETCH_TV_TOP_RATE, payload: response.data.results });
}); 

export const fetchTVPopular = () => async (dispatch) => {
    _fetchTVPopular(dispatch);
}; 
export const _fetchTVPopular = _.memoize( async (dispatch) => {
    const response = await theMovieDB.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=2`);
    dispatch({ type: FETCH_TV_POPULAR, payload: response.data.results });
});



