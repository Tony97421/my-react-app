import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { useEffect } from "react";


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
];

function App() {
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  const [pokemonIndex, setpokemonIndex] = useState(0);

  const pokemon = pokemonList[pokemonIndex];

  return (
    <>
      <NavBar
        pokemonIndex={pokemonIndex}
        setpokemonIndex={setpokemonIndex}
        pokemonList={pokemonList}
      />
      <PokemonCard pokemonBox={pokemon} />
    </>
  );
}

export default App;
