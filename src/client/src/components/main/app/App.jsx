import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../../resources/store';
import AppRoutes from './AppRoutes';
import BaseTemplate from '../../template/base/BaseTemplate';
import history from '../../../resources/history';

const App = props => (
  <Provider store={store}>
    <Router history={history}>
      <BaseTemplate>
        <AppRoutes />
      </BaseTemplate>
    </Router>
  </Provider>
)

export default App;
