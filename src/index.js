import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducer';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


let store= createStore (reducers, applyMiddleware(thunk))

class Principal extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
      <Principal />
   </BrowserRouter>
  </Provider>, document.getElementById('root'));


