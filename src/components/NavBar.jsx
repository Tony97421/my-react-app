import PropTypes from "prop-types";
import "./style.scss"

function NavBar({ setpokemonIndex, pokemonList }) {
  const handleClick = (index, pokemonName) => {
    setpokemonIndex(index);
    setTimeout(() => {
      if (pokemonName.toLowerCase() === "pikachu") {
        alert("pika pikachu !!!");
      }
    }, 200);
  };
  return (
    <>
      <div className="button">
        {pokemonList.map((pokemon, index) => (
          <button
            key={index}
            onClick={() => {
              handleClick(index, pokemon.name);
            }}
          >
            {pokemon.name}
          </button>
        ))}
      </div>
    </>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.string.isRequired,
  setpokemonIndex: PropTypes.string.isRequired,
  pokemonListLength: PropTypes.arrayOf(PropTypes.string).isRequired,
  pokemonList: PropTypes.arrayOf.isRequired,
};

export default NavBar;
