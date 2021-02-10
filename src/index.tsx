import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux';
import HomePage from './screens/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
