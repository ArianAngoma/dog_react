import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Image, Row, Col} from 'antd';

import {imageDogsLoad} from '../../actions/dog';

export const ImageBreeds = () => {
  const dispatch = useDispatch();
  const {activeBreeds} = useSelector((state: any) => state.breed);
  const {dogs} = useSelector((state: any) => state.dog);

  useEffect(() => {
    dispatch(imageDogsLoad(activeBreeds));
  }, [activeBreeds]);

  if (!activeBreeds.length) {
    return (
      <Row>
        <Col span={12} offset={6}>
          <h1>Select some dog breeds ...</h1>
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Row gutter={[16, 24]}>
        {
          dogs.map((dog: string) => (
            <Col className="gutter-row" span={6} key={dog}>
              <Image
                key={dog}
                width={200}
                src={dog}
              />
            </Col>
          ))
        }
      </Row>
    </>
  );
};
