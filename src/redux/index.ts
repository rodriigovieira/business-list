import {createSelectorHook} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {BusinessReducer} from './reducers/BusinessReducer';

const rootReducer = combineReducers({
  business: BusinessReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const typedUseSelector = createSelectorHook<RootState>();
export const store = createStore(rootReducer);
