const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


function PokemonCard ({pokemonBox}) {
    console.log(pokemonBox)

    //const pokemon = pokemonList[0]

    return (
        <>
        <figure>
          {pokemonBox.imgSrc === undefined ? <p>????</p> : 
            <img src= {pokemonBox.imgSrc} alt="pokemon" />}
        </figure>
        <figcaption>{pokemonBox.name}</figcaption>
        </>
);

}
    


export default PokemonCard;