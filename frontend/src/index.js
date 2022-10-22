import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import store from './ReduxStore/Store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element= {<App/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
