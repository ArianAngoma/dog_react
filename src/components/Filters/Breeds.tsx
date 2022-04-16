import {useCallback, useEffect, useState} from 'react';

import {fetchBreeds} from '../../helpers/fetch';
import {TreeCheck} from '../CheckBox/TreeCheck';

interface ITreeData {
  title: string,
  key: string,
}

interface ITreeBreed extends ITreeData {
  children?: ITreeData[];
}

export const Breeds = () => {
  const [breedsTree, setBreedsTree] = useState<ITreeBreed[]>([]);

  const getBreeds = useCallback(async () => {
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
    setBreedsTree(dataTree);
  }, []);

  useEffect(() => {
    getBreeds();
  }, [getBreeds]);

  return (
    <TreeCheck treeData={breedsTree}/>
  );
};
