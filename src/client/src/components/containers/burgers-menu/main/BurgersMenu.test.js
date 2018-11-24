import React from 'react';
import ReactDOM from 'react-dom';
import BurgersMenu from './BurgersMenu';
import { Provider } from 'react-redux';
import store from '../../../../resources/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><BurgersMenu /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
