import * as Actions from '../constants/ingredients.constants';

const INITIAL_STATE = {
    items: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.SET_INGREDIENTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
};