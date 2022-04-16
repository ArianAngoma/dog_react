import {types} from '../types/types';

interface IBreed {
  breeds: string[];
  activeBreeds: string[];
}

const initialState: IBreed = {
  breeds: [],
  activeBreeds: [],
};

export const breedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.breadLoad:
      return {
        ...state,
        breeds: [...action.payload],
      };
    case types.addBreed:
      return {
        ...state,
        activeBreeds: [...action.payload],
      };
    default:
      return state;
  }
};
