import { FETCH_MOVIE_TOP_RATE } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_MOVIE_TOP_RATE: 
            return action.payload;
        default:
            return state;
    }
};