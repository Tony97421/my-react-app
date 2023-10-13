import PropTypes from "prop-types";

function PokemonCard({ pokemonBox }) {
  console.log(pokemonBox);

  return (
    <>
      <figure>
        {pokemonBox.imgSrc === undefined ? (
          <p>????</p>
        ) : (
          <img src={pokemonBox.imgSrc} alt="pokemon" />
        )}
      </figure>
      <figcaption>{pokemonBox.name}</figcaption>
    </>
  );
}

PokemonCard.propTypes = {
  pokemonBox: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
