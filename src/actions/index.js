import theMovieDB from '../apis/theMovieDB';
import { FETCH_MOVIE_HOME } from './types';

const API_KEY = 'e4c74354ea589d45cce2ba3047a613c6';


export const fetchMovieHome = (typeMovie) => async (dispatch) => {
    
    const response = await theMovieDB.get(`/search/movie?api_key=${API_KEY}&query=${typeMovie}&page=1`);

    dispatch({ type: FETCH_MOVIE_HOME, payload: response.data.results });
}; 


