import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';                                           
import { connectRouter, routerMiddleware } from 'connected-react-router';       
import { createBrowserHistory } from 'history';                                 

import todoReducer from './reducers/todo';                                      

export const history = createBrowserHistory();                                  
const rootReducer = combineReducers({                                           
  td: todoReducer,                                                              
  router: connectRouter(history),                                               
});                                                                             

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))));

export default store;                                                           
