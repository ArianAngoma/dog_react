import {types} from '../types/types';

export const addBreed = (breeds: string[]) => ({
  type: types.addBreed,
  payload: breeds,
});
