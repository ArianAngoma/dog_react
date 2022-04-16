import {Provider} from 'react-redux';
import {Row, Col} from 'antd';

import {Breeds} from './components/Filters/Breeds';
import {store} from './store/store';
import {ImageBreeds} from './components/ImageBreed/ImageBreeds';
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <Row>
        <Col span={18} push={6}>
          <ImageBreeds/>
        </Col>
        <Col span={6} pull={18}>
          <Breeds/>
        </Col>
      </Row>
    </Provider>
  );
}

export default App;
