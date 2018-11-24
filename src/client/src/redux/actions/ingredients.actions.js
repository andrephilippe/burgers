import * as Actions from '../constants/ingredients.constants';
import { get } from "../../resources/baseService";

export const getIngredients = () => {
    return (dispatch) => {
        get('ingredients/findAll').then(ingredients => {
            dispatch({
                type: Actions.SET_INGREDIENTS,
                payload: ingredients
            })
        })
    }
}