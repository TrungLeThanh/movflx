import { FETCH_TV_BY_ID } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_TV_BY_ID: 
            return action.payload;
        default:
            return state;
    }
};