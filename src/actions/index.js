import theMovieDB from '../apis/theMovieDB';
import { FETCH_MOVIE } from './types';

const API_KEY = 'e4c74354ea589d45cce2ba3047a613c6';

export const fetchMovie = () => async (dispatch) => {
    
    const response = await theMovieDB.get(`movie/550/videos?api_key=${API_KEY}&language=en-US`);

    dispatch({ type: FETCH_MOVIE, payload: response });
}; 


