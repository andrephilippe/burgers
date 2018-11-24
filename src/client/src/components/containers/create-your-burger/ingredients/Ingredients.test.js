import React from 'react';
import ReactDOM from 'react-dom';
import Ingredients from './Ingredients';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import store from '../../../../resources/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><DragDropContext><Ingredients /></DragDropContext></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
