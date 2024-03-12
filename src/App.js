import React, { useEffect, useState } from 'react';
import "./App.css"

const PokemonApp = () => {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        const results = data.results;

        // Fetch additional data for each Pokemon
        const promises = results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        });

        // Wait for all requests to finish
        const pokemonData = await Promise.all(promises);

        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchData();
  }, [baseUrl]);

  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
          <h2>{pokemon.name}</h2>
          
          <img className="imagesPokemon" src={pokemon.sprites.front_default} alt={`${pokemon.name} Image`} />
          <img className="imagesPokemon" src={pokemon.sprites.back_default} alt={`${pokemon.name} Image`} />

          <div><strong>Type 1:</strong> {pokemon.types[0].type.name}</div>
          {pokemon.types.length > 1 && <div><strong>Type 2:</strong> {pokemon.types[1].type.name}</div>}
          <div>
            <strong>Base Stats:</strong>
            <ul>
              <li>HP: {pokemon.stats[0].base_stat}</li>
              <li>Attack: {pokemon.stats[1].base_stat}</li>
              <li>Defense: {pokemon.stats[2].base_stat}</li>
              <li>Special Attack: {pokemon.stats[3].base_stat}</li>
              <li>Special Defense: {pokemon.stats[4].base_stat}</li>
              <li>Speed: {pokemon.stats[5].base_stat}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonApp;
