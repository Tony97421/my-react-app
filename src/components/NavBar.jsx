import PropTypes from "prop-types";


function NavBar({ pokemonIndex, setpokemonIndex, pokemonList}) {
  
  const handleClick =(index) => {
    setpokemonIndex(index);
  };

  return (

    <>
    <div>
      {pokemonList.map((pokemon, index) =>
      <button key={index} onClick={() => {handleClick(index)}}>{pokemon.name}</button>)
      } 
    </div>
    </>
  )}

    


{/*      
      {pokemonIndex > 0 && (
        <button onClick={() => setpokemonIndex(pokemonIndex - 1)}>
          Precedent
        </button>
      )}
      {pokemonIndex < pokemonListLength - 1 && (
        <button onClick={() => setpokemonIndex(pokemonIndex + 1)}>
          Suivant
        </button>
      )} */}
NavBar.propTypes = {

    pokemonIndex: PropTypes.string.isRequired,
    setpokemonIndex: PropTypes.string.isRequired,
    pokemonListLength: PropTypes.arrayOf(PropTypes.string).isRequired,
    pokemonList: PropTypes.arrayOf.isRequired
  
};

export default NavBar;
