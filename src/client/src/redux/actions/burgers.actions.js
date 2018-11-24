import * as Actions from '../constants/burgers.constants';
import { get } from "../../resources/baseService";

export const getBurgersMenu = () => {
    return (dispatch) => {
        get('burgersmenu/findAll').then(burgers => {
            dispatch({
                type: Actions.SET_BURGERS_MENU,
                payload: burgers
            })
        })
    }
}