import { animals } from "../assets/AnimalsDb";

export default function AnimalImages() {
  return (
    <>
      <h1>Select the Animal</h1>
      {
        animals.map((animal) => (
          <img
            key={animal.name}
            src={`/fig/${animal.img}`}
            alt={animal.name}
            // onClick={() => handleAnimalClick(animal.name)}
            style={{ cursor: "pointer", width: "150px", height: "150px", objectFit: "cover" }}
          />)
        )
      }
    </>
  );
}