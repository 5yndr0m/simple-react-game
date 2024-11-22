import { useEffect } from "react";


export default function ResultView({ setResultValue, animalName, resultValue, pick }) {
  
  useEffect(() => {
    if (pick && animalName) {
      if (pick === animalName) {
        setResultValue("Win");
      } else {
        setResultValue("Lose");
      }
    }
  }, [pick, animalName, setResultValue]);
  
  return (    
    <>
      <h1>Result</h1>
      <h1>{resultValue}</h1>
    </>
  );
}