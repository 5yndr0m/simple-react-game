import { useEffect } from "react";
import { animals } from "../assets/AnimalsDb";

export default function RandomNamePicker({ setRandomizedAnimal, setAnimalName, animalName }) {
  
  useEffect(() => {
    randomize();
  }, []);
  
  const changeOrder = () => {
    const changed = [...animals].sort(() => Math.random() - 0.5);
    setRandomizedAnimal(changed);
  }
  
  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * 10) + 1;
    setAnimalName(animals[randomIndex].name);
    changeOrder();
  }
  
  return (
    <>
      <h1>Animal Name</h1>
      <h1 style={{ color: "orange" }}>{animalName}</h1>
    </>
  );
}