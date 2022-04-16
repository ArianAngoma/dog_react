import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

import {fetchImageDog} from '../helpers/fetch';

export const imageDogsLoad = (breeds: string[]) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const resp = await Promise.all(
          breeds.map((breed: string) => fetchImageDog(breed)),
      );
      const data = await Promise.all(resp.map((resp: any) => resp.json()));
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
};
