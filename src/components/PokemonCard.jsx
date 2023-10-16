import PropTypes from "prop-types";
import "./style.scss";

function PokemonCard({ pokemonBox }) {
  console.log(pokemonBox);

  return (
    <div className="namePokemon">
      <figure>
        {pokemonBox.imgSrc === undefined ? (
          <p>????</p>
        ) : (
          <img className="image" src={pokemonBox.imgSrc} alt="pokemon" />
          
        )}
      </figure>
      <figcaption>{pokemonBox.name}🤠</figcaption>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemonBox: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
