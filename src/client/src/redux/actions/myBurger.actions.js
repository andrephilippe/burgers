import * as Actions from '../constants/myBurger.constants';

export const expandIngredients = () => ({
    type: Actions.EXPAND_INGREDIENTS
})

export const compressIngredients = () => ({
    type: Actions.COMPRESS_INGREDIENTS
})

export const openBurger = burger => ({
    type: Actions.SET_BURGER,
    payload: burger,
    redirect: '/create-your-burger'
})

export const reorderIngredients = (source, destination) => {
    return (dispatch, getState) => {

        const ingredients = getState().myBurger.burger.ingredients;

        if (!destination) {
            ingredients.splice(source.index, 1);
        } else {
            const ingredient = ingredients[source.index];
            ingredients.splice(source.index, 1);
            ingredients.splice(destination.index, 0, ingredient);
        }

        dispatch({
            type: Actions.SET_BURGER_INGREDIENTS,
            payload: ingredients
        })
    }
}

export const addIngredient = (source, destination) => {
    return (dispatch, getState) => {
        const burgerIngredients = [...getState().myBurger.burger.ingredients];
        const ingredient = getState().ingredients.items[source.index];
        
        if (!destination) {
            return;
        } else {
            burgerIngredients.splice(destination.index, 0, ingredient)
        }

        dispatch({
            type: Actions.SET_BURGER_INGREDIENTS,
            payload: burgerIngredients
        })
    }
}

export const onDrag = () => {
    return (dispatch) => {
        dispatch([
            { type: Actions.EXPAND_INGREDIENTS },
            { type: Actions.TOGGLE_DRAG }
        ])
    }
}