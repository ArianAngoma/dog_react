import {types} from '../types/types';

interface IBreed {
  breeds: string[];
}

const initialState: IBreed = {
  breeds: [],
};

export const breedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.addBreed:
      return {
        dogs: [...action.payload],
      };
    default:
      return state;
  }
};
