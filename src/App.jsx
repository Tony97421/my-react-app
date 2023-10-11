import PokemonCard from "./components/PokemonCard";
import { useState } from "react";


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




  
    function App () {
      
        const [pokemonIndex, setpokemonIndex] = useState(0);
      
        
        const pokemon = pokemonList[pokemonIndex]

      return(
        
        <>
          { pokemonIndex > 0 &&
          <button  onClick={() => setpokemonIndex(pokemonIndex - 1)}>Precedent</button>
    }
          { pokemonIndex < pokemonList.length -1 &&
          <button  onClick={() => setpokemonIndex(pokemonIndex + 1)}>Suivant</button>
          }
        
        <div>
           <PokemonCard pokemonBox ={pokemon}/>
        </div>
        </>
      );
  }





//() => setCount(count + 1)
//() => setCount(count -1)






export default App;
