import * as Actions from '../constants/loader.constants';

export const showLoader = () => {
    return {
        type: Actions.SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: Actions.HIDE_LOADER
    }
}