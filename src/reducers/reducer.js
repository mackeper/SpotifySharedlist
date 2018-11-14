import { TYPE } from '../actions/types';

const initailState = {
    test: "",
}

export default (state = initailState, action) => {
    switch(action.type) {
        case TYPE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}