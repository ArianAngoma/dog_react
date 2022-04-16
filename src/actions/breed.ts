import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import {fetchBreeds} from '../helpers/fetch';
import {types} from '../types/types';

interface ITreeData {
  title: string,
  key: string,
}

interface ITreeBreed extends ITreeData {
  children?: ITreeData[];
}

export const breedStartLoad = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const resp = await fetchBreeds();
      const data = await resp.json();
      const dataTree = Object.keys(data.message).map((breed: string) => {
        if (data.message[breed].length >= 1) {
          return ({
            title: breed,
            key: `/${breed}/`,
            children: data.message[breed].map((subBreed: string) => {
              return ({
                title: subBreed,
                key: `/${breed}/${subBreed}/`,
              });
            }),
          });
        } else {
          return ({
            title: breed,
            key: `/${breed}/`,
          });
        }
      });
      return dispatch(breedLoad(dataTree));
    } catch (e) {
      console.log(e);
    }
  };
};

export const breedLoad = (breedsTree: ITreeBreed[]) => ({
  type: types.breadLoad,
  payload: breedsTree,
});

export const addBreed = (breeds: string[]) => ({
  type: types.addBreed,
  payload: breeds,
});
