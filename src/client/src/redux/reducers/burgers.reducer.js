import * as Actions from '../constants/burgers.constants';

const INITIAL_STATE = {
    menu: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.SET_BURGERS_MENU:
            return {
                ...state,
                menu: action.payload
            }
        default:
            return state;
    }
};