import { TYPE } from './types';


export const logout = () => dispatch => {
    dispatch({
        type: TYPE,
        payload: {
            test: "helo"
        }
    });
} 