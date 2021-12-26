import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import WeatherReducer from './reducers/weatherReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const middlewareEnhancer = applyMiddleware(consoleMiddleware);

const store = createStore(WeatherReducer, middlewareEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
