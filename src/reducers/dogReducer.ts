import {types} from '../types/types';

interface IDogImage {
  dogs: string[];
}

const initialState: IDogImage = {
  dogs: [],
};

export const dogReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.dogSetImage:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
