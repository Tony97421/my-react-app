import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setpokemonIndex, pokemonListLength}) {
  return (
    <>
      {pokemonIndex > 0 && (
        <button onClick={() => setpokemonIndex(pokemonIndex - 1)}>
          Precedent
        </button>
      )}
      {pokemonIndex < pokemonListLength - 1 && (
        <button onClick={() => setpokemonIndex(pokemonIndex + 1)}>
          Suivant
        </button>
      )}
    </>
  );
}

NavBar.propTypes = {

    pokemonIndex: PropTypes.string.isRequired,
    setpokemonIndex: PropTypes.string.isRequired,
    pokemonListLength: PropTypes.arrayOf(PropTypes.string).isRequired
  
};

export default NavBar;
