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
  const [randomizedAnimal, setRandomizedAnimal] = useState('');
  
  
  
  return (
    <Container>
      <Row>
        <Col>Animal Matching Game</Col>
      </Row>
      <Row>
        <Col>
          <ResultView 
          setResultValue={setResultValue}
          animalName={animalName}
          randomizedAnimal={randomizedAnimal}
          resultValue={resultValue}
          />
        </Col>
        <Col>
          <RandomNamePicker 
            setRandomizedAnimal={setRandomizedAnimal} 
            setAnimalName={setAnimalName} 
            animalName={animalName}
          />
        </Col>
        <Col md={7}><AnimalImages /></Col>
      </Row>
    </Container>
  );
}

export default App;
