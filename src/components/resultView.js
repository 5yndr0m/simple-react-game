

export default function ResultView({ setResultValue, animalName, randomizedAnimal,resultValue }) {
  
  const handleCompare = () => {
    const result = randomizedAnimal.filter(animal => animal.name === animalName);
    setResultValue(result[0].name);
  }
  
  return (    
    <>
      <h1>Result</h1>
      <h1>{resultValue}</h1>
    </>
  );
}