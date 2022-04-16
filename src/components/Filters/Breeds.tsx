import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {TreeCheck} from '../CheckBox/TreeCheck';
import {breedStartLoad} from '../../actions/breed';

export const Breeds = () => {
  const dispatch = useDispatch();
  const {breeds} = useSelector((state: any) => state.breed);

  useEffect(() => {
    dispatch(breedStartLoad());
  }, []);

  return (
    <TreeCheck treeData={breeds}/>
  );
};
