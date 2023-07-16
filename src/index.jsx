import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle, AppContainer } from 'src/styles/styles';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from 'src/components/app';
import store from 'src/store/store';

import 'src/styles/font.css';

render(
  <AppContainer>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
