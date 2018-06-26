import { History } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { Action, applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { ITopState, TopActions } from './reducers/top';

export default function createStore(history: History) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history)
    )
  );
}

export interface IReduxState {
    top: ITopState
}
  
export type ReduxAction = TopActions | Action