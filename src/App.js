import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ResultView from './components/resultView';
import AnimalImages from './components/animalImages';
import RandomNamePicker from './components/randomNamePicker';

function App() {
  return (
    <Container>
      <Row>
        <Col>Animal Matching Game</Col>
      </Row>
      <Row>
        <Col><ResultView /></Col>
        <Col><RandomNamePicker /></Col>
        <Col><AnimalImages /></Col>
      </Row>
    </Container>
  );
}

export default App;
