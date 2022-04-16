import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {imageDogsLoad} from '../../actions/dog';

export const ImageBreeds = () => {
  const dispatch = useDispatch();
  const {activeBreeds} = useSelector((state: any) => state.breed);

  useEffect(() => {
    dispatch(imageDogsLoad(activeBreeds));
  }, [activeBreeds]);

  return (
    <div>Image</div>
  );
};
