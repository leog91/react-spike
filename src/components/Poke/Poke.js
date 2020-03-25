import React, { useState } from "react";
import SomeComponent from "../SomeComponent/SomeComponent";

const Poke = () => {
  const [pokedexNumber, setpokedexNumber] = useState("3");

  const handleRandom = () =>
    setpokedexNumber(Math.floor(Math.random() * 133) + 151);

  return (
    <div>
      <button type="button" onClick={() => handleRandom()}>
        ClickHere!
      </button>
      <SomeComponent number={pokedexNumber} handleRandom={handleRandom} />
    </div>
  );
};

export default Poke;
