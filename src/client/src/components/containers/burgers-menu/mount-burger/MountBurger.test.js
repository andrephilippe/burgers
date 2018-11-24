import React from 'react';
import ReactDOM from 'react-dom';
import MountBurger from './MountBurger';
import { Provider } from 'react-redux';
import store from '../../../../resources/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><MountBurger /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
