import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import store from '../../../../resources/store';
import { mount } from 'enzyme';

describe('<Cart />', () => {

  let cart;

  const initialIngredients = [
    { id: 1, img: 'https://i.imgur.com/BHv8ACd.png', name: 'Pão de cima', bottom: -20, price: 0 },
    { id: 6, img: 'https://i.imgur.com/sDiZhon.png', name: 'Bacon', bottom: -30, price: 2.00 },
    { id: 5, img: 'https://i.imgur.com/sRW1kf9.png', name: 'Queijo', bottom: -28, price: 1.50 },
    { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'Hambúrguer', bottom: -20, price: 3.00 },
    { id: 7, img: 'https://i.imgur.com/BC6OXB4.png', name: 'Pão de baixo', bottom: -25, price: 0 }
  ];

  let ingredients = initialIngredients;

  const total = () => (
    ingredients.reduce((val, ingredient) => {
      return val + ingredient.price
    }, 0)
  );

  beforeEach(() => {
    cart = mount(<Provider store={store}><DragDropContext><Cart /></DragDropContext></Provider>)
  });

  it('renders without crashing', () => {
    expect(cart.find(Cart).length).toEqual(1)
  });

  it('verify price exists', () => {
    expect(cart.find('#total-price').length).toEqual(1);
  });

  it('verify price without promotion', () => {
    store.dispatch({
      type: 'SET_BURGER_INGREDIENTS', payload: ingredients
    });
    expect(cart.find('#total-price').text().replace('TOTAL: R$ ', '')).toEqual(total().toFixed(2));
  });

  it('verify price with promotion Much Meat', () => {
    ingredients = [
      ...initialIngredients,
      { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'Hambúrguer', bottom: -20, price: 3.00 },
      { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'Hambúrguer', bottom: -20, price: 3.00 }
    ];
    store.dispatch({
      type: 'SET_BURGER_INGREDIENTS', payload: ingredients
    });
    expect(cart.find('#total-price').text().replace('TOTAL: R$ ', '')).toEqual((total() - 3.00).toFixed(2));
  });

  it('verify price with promotion Much Cheese', () => {
    ingredients = [
      ...initialIngredients,
      { id: 5, img: 'https://i.imgur.com/sRW1kf9.png', name: 'Queijo', bottom: -28, price: 1.50 },
      { id: 5, img: 'https://i.imgur.com/sRW1kf9.png', name: 'Queijo', bottom: -28, price: 1.50 },
    ];
    store.dispatch({
      type: 'SET_BURGER_INGREDIENTS', payload: ingredients
    });
    expect(cart.find('#total-price').text().replace('TOTAL: R$ ', '')).toEqual((total() - 1.50).toFixed(2));
  });

  it('verify price with promotion Light', () => {
    ingredients = [
      ...initialIngredients
    ];
    ingredients[1] = { id: 2, img: 'https://i.imgur.com/7xgcbnx.png', name: 'Alface', bottom: -20, price: 0.40 };
    store.dispatch({
      type: 'SET_BURGER_INGREDIENTS', payload: ingredients
    });
    expect(cart.find('#total-price').text().replace('TOTAL: R$ ', '')).toEqual((total() - (total() * 0.10)).toFixed(2));
  });

})