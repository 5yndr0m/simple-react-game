import { useEffect } from "react";
import { animals } from "../assets/AnimalsDb";

export default function RandomNamePicker({ setRandomizedAnimal, setAnimalName,animalName }) {
  
  useEffect(() => {
    changeOrder();
    randomize();
  }, []);
  
  const changeOrder = () => {
    const changed = [...animals].sort(() => Math.random() - 0.5);
    setRandomizedAnimal(changed);
  }
  
  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setAnimalName(animals[randomIndex].name)
  }
  
  return (
    <>
      <h1>Animal Name</h1>
      <h1>{animalName}</h1>
    </>
  );
}