import { FETCH_MOVIE } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_MOVIE: 
            return action.payload;
        default:
            return state;
    }
};