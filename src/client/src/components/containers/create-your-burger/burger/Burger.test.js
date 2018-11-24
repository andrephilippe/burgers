import React from 'react';
import ReactDOM from 'react-dom';
import Burger from './Burger';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import store from '../../../../resources/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><DragDropContext><Burger /></DragDropContext></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
