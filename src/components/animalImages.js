import { hover } from "@testing-library/user-event/dist/hover";
import { animals } from "../assets/AnimalsDb";
import { useState } from "react";

export default function AnimalImages({ handleClick }) {
  
  const [hovered, setHovered] = useState(null);
  
  return (
    <>
      <h1>Select the Animal</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", backgroundColor: "aqua", padding: "10px", marginTop: "10px" }}>
        {
          animals.map((animal) => (
            <img
              key={animal.name}
              src={`/fig/${animal.img}`}
              alt={animal.name}
              onClick={() => handleClick(animal.name)}
              onMouseEnter={() => setHovered(animal.name)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer", width: "120px", height: "120px", objectFit: "cover", margin: "10px", border: hovered === animal.name ?  "3px solid orange" : "3px solid transparent", transition: "border 0.3s ease", }}
            />)
          )
        }
      </div>
    </>
  );
}