import {combineReducers} from 'redux';

import {dogReducer} from './dogReducer';

export const rootReducers = combineReducers({
  dog: dogReducer,
});
