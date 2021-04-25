import theMovieDB from '../apis/theMovieDB';
import { FETCH_MOVIE_HOME, FETCH_MOVIE_TOP_RATE, FETCH_TV_TOP_RATE, FETCH_TV_POPULAR } from './types';

const API_KEY = 'e4c74354ea589d45cce2ba3047a613c6';


export const fetchMovieHome = (typeMovie) => async (dispatch) => {
    
    const response = await theMovieDB.get(`/search/movie?api_key=${API_KEY}&query=${typeMovie}&page=1`);

    dispatch({ type: FETCH_MOVIE_HOME, payload: response.data.results });
}; 

export const fetchMovieTopRate = () => async (dispatch) => {
    
    const response = await theMovieDB.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

    dispatch({ type: FETCH_MOVIE_TOP_RATE, payload: response.data.results });
}; 

export const fetchTVTopRate = () => async (dispatch) => {
    
    const response = await theMovieDB.get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=2`);

    dispatch({ type: FETCH_TV_TOP_RATE, payload: response.data.results });
}; 

export const fetchTVPopular = () => async (dispatch) => {
    
    const response = await theMovieDB.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=2`);

    dispatch({ type: FETCH_TV_POPULAR, payload: response.data.results });
}; 


