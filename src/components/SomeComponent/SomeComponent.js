import React, { useState, useEffect } from "react";
import "./SomeComponent.css";

const SomeComponent = props => {
  const [imageUrl, setImgUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${props.number}/`
        );
        let data = await response.json();

        setImgUrl(data.sprites.front_default);
      } catch {
        console.log("nope!");
      }
    };
    fetchData();
  }, [props.number]);

  return (
    <div>
      <h3>TaDa!: </h3>
      <h2># {props.number} </h2>
      <img
        className="PokeIcon"
        onClick={() => props.handleRandom()}
        alt="pokemon icon"
        src={imageUrl}
      />
    </div>
  );
};

export default SomeComponent;
