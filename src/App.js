import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ResultView from './components/resultView';
import AnimalImages from './components/animalImages';
import RandomNamePicker from './components/randomNamePicker';
import { useState } from 'react';

function App() {
  
  const [animalName, setAnimalName] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [randomizedAnimal, setRandomizedAnimal] = useState([]);
  const [pick, setPick] = useState('');
  
  const handleClick = (animal) => {
    setPick(animal);
  }
  
  return (
    <Container className="content-Center">
      <br/>
      <Row>
        <Col className='borderforall'>
          <h1>Animal Matching Game</h1>
        </Col>
      </Row>
      <Row>
        <Col className="borderforall">
          <ResultView 
          setResultValue={setResultValue}
          animalName={animalName}
          resultValue={resultValue}
          pick={pick}
          />
        </Col>
        <Col className="borderforall">
          <RandomNamePicker 
            setRandomizedAnimal={setRandomizedAnimal} 
            setAnimalName={setAnimalName} 
            animalName={animalName}
          />
        </Col>
        <Col md={6} className="borderforall">
          <AnimalImages 
            handleClick={handleClick} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
