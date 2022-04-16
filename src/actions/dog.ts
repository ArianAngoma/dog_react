import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

import {fetchImageDog} from '../helpers/fetch';
import {types} from '../types/types';

export const imageDogsLoad = (breeds: string[]) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const resp = await Promise.all(
          breeds.map((breed: string) => fetchImageDog(breed)),
      );
      const data = await Promise.all(resp.map((resp: any) => resp.json()));
      dispatch(dogSetImage(
          data.map((item: any) => item.message)
              .flat()),
      );
    } catch (e) {
      console.log(e);
    }
  };
};


export const dogSetImage = (images: string[]) => ({
  type: types.dogSetImage,
  payload: images,
});
