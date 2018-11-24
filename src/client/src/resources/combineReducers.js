import { combineReducers } from 'redux';

import loaderReducer from '../redux/reducers/loader.reducer';
import myBurgerReducer from '../redux/reducers/myBurger.reducer';
import burgers from '../redux/reducers/burgers.reducer';
import ingredientsReducer from '../redux/reducers/ingredients.reducer';

const rootReducer = combineReducers({
    loader: loaderReducer,
    myBurger: myBurgerReducer,
    burgers: burgers,
    ingredients: ingredientsReducer
})

export default rootReducer;