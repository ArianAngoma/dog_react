import {Breeds} from './components/Filters/Breeds';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <Row>
      <Col span={18} push={6}>
        Image
      </Col>
      <Col span={6} pull={18}>
        <Breeds/>
      </Col>
    </Row>
  );
}

export default App;
