import * as Actions from '../constants/myBurger.constants';

const INITIAL_STATE = {
    expand: false,
    onDrag: false,
    burger: {
        id: 1,
        name: 'DO SEU JEITO',
        ingredients: [
            { id: 1, img: 'https://i.imgur.com/BHv8ACd.png', name: 'top-bread', bottom: -20, price: 0 },
            { id: 2, img: 'https://i.imgur.com/7xgcbnx.png', name: 'lettuce', bottom: -20, price: 0.40 },
            { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'beff', bottom: -20, price: 3.00 },
            { id: 4, img: 'https://i.imgur.com/dF1q2PG.png', name: 'egg', bottom: -20, price: 0.80 },
            { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'beff', bottom: -20, price: 3.00 },
            { id: 5, img: 'https://i.imgur.com/sRW1kf9.png', name: 'cheese', bottom: -28, price: 1.50 },
            { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'beff', bottom: -20, price: 3.00 },
            { id: 6, img: 'https://i.imgur.com/sDiZhon.png', name: 'bacon', bottom: -30, price: 2.00 },
            { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'beff', bottom: -20, price: 3.00 },
            { id: 7, img: 'https://i.imgur.com/BC6OXB4.png', name: 'bottom-bread', bottom: -25, price: 0 }
        ]
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.EXPAND_INGREDIENTS:
            return {
                ...state,
                expand: state.onDrag ? state.expand : true
            };
        case Actions.COMPRESS_INGREDIENTS:
            return {
                ...state,
                expand: state.onDrag ? state.expand : false
            };
        case Actions.SET_BURGER_INGREDIENTS:
            return {
                ...state,
                burger: {
                    ...state.burger,
                    ingredients: action.payload
                }
            };
        case Actions.TOGGLE_DRAG:
            return {
                ...state,
                onDrag: !state.onDrag
            }
        case Actions.SET_BURGER:
            return {
                ...state,
                burger: action.payload
            }
        default:
            return state;
    }
};