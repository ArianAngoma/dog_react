import {combineReducers} from 'redux';

import {dogReducer} from './dogReducer';
import {breedReducer} from './breedReducer';

export const rootReducers = combineReducers({
  dog: dogReducer,
  breed: breedReducer,
});
