import * as Actions from '../constants/loader.constants';

const INITIAL_STATE = {
    show: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.SHOW_LOADER:
            return {
                ...state,
                show: !state.show
            };
        case Actions.HIDE_LOADER:
            return {
                ...state,
                show: !state.show
            };
        default:
            return state;
    }
};