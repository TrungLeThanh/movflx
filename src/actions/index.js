import theMovieDB from '../apis/theMovieDB';
import { FETCH_MOVIE } from './types';

export const fetchMovie = () => async (dispatch) => {
    const response = await theMovieDB.get('/movie');

    dispatch({ type: FETCH_MOVIE, payload: response.data });
}; 

