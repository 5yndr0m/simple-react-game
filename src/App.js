import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ResultView from './components/resultView';
import AnimalImages from './components/animalImages';
import RandomNamePicker from './components/randomNamePicker';
import { useState, useEffect } from 'react';
import { animals } from './assets/AnimalsDb';

function App() {
  
  const [animalName, setAnimalName] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [randomizedAnimal, setRandomizedAnimal] = useState([]);
  const [pick, setPick] = useState('');
  
  const handleClick = (animal) => {
    setPick(animal);
  }
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Animal Matching Game</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ResultView 
          setResultValue={setResultValue}
          animalName={animalName}
          resultValue={resultValue}
          pick={pick}
          />
        </Col>
        <Col>
          <RandomNamePicker 
            setRandomizedAnimal={setRandomizedAnimal} 
            setAnimalName={setAnimalName} 
            animalName={animalName}
          />
        </Col>
        <Col md={6}>
          <AnimalImages 
            handleClick={handleClick} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
