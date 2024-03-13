import React, { useEffect, useState } from 'react';
import './App.css'; 
import Grass from "./images/grass.png";
import Poison from "./images/Poison.png";
import Normal from "./images/Normal.png";
import Fighting from "./images/Fighting.png";
import Flying from "./images/Flying.png";
import Ground from "./images/Ground.png";
import Rock from "./images/Rock.png";
import Bug from "./images/Bug.png";
import Ghost from "./images/Ghost.png";
import Steel from "./images/Steel.png";
import Stellar from "./images/Stellar.png";
import Fire from "./images/Fire.png";
import Water from "./images/Water.png";
import Electric from "./images/Electric.png";
import Psychic from "./images/Psychic.png";
import Ice from "./images/Ice.png";
import Dragon from "./images/Dragon.png";
import Dark from "./images/Dark.png";
import Fairy from "./images/Fairy.png";
import Unknown from "./images/Unknown.png";




const PokemonApp = () => {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  // siling api 0-151 
  const defaultLimit = 1;

  const [pokemonData, setPokemonData] = useState([]);
  const [limit, setLimit] = useState(defaultLimit);

  useEffect(() => {
    const fetchData = async () => {
      const data = [];

      for (let i = 1; i <= limit; i++) {
        const response = await fetch(`${baseUrl}${i}/`);
        const pokemon = await response.json();
        data.push(pokemon);
      }

      setPokemonData(data);
    };

    fetchData();
  }, [limit]);

  const handleLimitChange = (event) => {
    const newLimit = parseInt(event.target.value, 10)
     || defaultLimit;
    setLimit(newLimit);
  };

  return (
    
    <div>
      
      <div className="pokemon-container">
      <div>
        <p className='LabelInput'>Input Number Pokémon to Display : </p>
        <input
          type="number"
          
          value={limit}
          onChange={handleLimitChange}
          min="0"
          max="151"
        />
        <p></p>
       
      </div>
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            
            <div className='imagesCard'>
            <img className="imagesPokemon" src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
            <img className="imagesPokemon" src={pokemon.sprites.back_default} alt={`${pokemon.name}`} />
</div>
<h3>Name: {pokemon.name.toUpperCase()}</h3>
            <div><strong>Type 1:</strong> {pokemon.types[0].type.name} 
            {pokemon.types[0].type.name == "grass" && <img style={{padding:"2px"}} className='typeImages' src={Grass} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "poison" && <img style={{padding:"2px"}} className='typeImages' src={Poison} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "normal" && <img style={{padding:"2px"}} className='typeImages' src={Normal} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "fighting" && <img style={{padding:"2px"}} className='typeImages' src={Fighting} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "flying" && <img style={{padding:"2px"}} className='typeImages' src={Flying} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "ground" && <img style={{padding:"2px"}} className='typeImages' src={Ground} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "rock" && <img style={{padding:"2px"}} className='typeImages' src={Rock} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "bug" && <img style={{padding:"2px"}} className='typeImages' src={Bug} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "ghost" && <img style={{padding:"2px"}} className='typeImages' src={Ghost} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "steel" && <img style={{padding:"2px"}} className='typeImages' src={Steel} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "stellar" && <img style={{padding:"2px"}} className='typeImages' src={Stellar} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "fire" && <img style={{padding:"2px"}} className='typeImages' src={Fire} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "water" && <img style={{padding:"2px"}} className='typeImages' src={Water} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "electric" && <img style={{padding:"2px"}} className='typeImages' src={Electric} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "psychic" && <img style={{padding:"2px"}} className='typeImages' src={Psychic} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "ice" && <img style={{padding:"2px"}} className='typeImages' src={Ice} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "dragon" && <img style={{padding:"2px"}} className='typeImages' src={Dragon} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "dark" && <img style={{padding:"2px"}} className='typeImages' src={Dark} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "fairy" && <img style={{padding:"2px"}} className='typeImages' src={Fairy} alt={`${pokemon.name}`} />}
            {pokemon.types[0].type.name == "???" && <img style={{padding:"2px"}} className='typeImages' src={Unknown} alt={`${pokemon.name}`} />}
             </div>
           
            {pokemon.types.length > 1 && <div><strong>Type 2:</strong> {pokemon.types[1].type.name}
            {pokemon.types[1].type.name == "grass" && <img style={{padding:"2px"}} className='typeImages' src={Grass} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "poison" && <img style={{padding:"2px"}} className='typeImages' src={Poison} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "normal" && <img style={{padding:"2px"}} className='typeImages' src={Normal} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "fighting" && <img style={{padding:"2px"}} className='typeImages' src={Fighting} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "flying" && <img style={{padding:"2px"}} className='typeImages' src={Flying} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "ground" && <img style={{padding:"2px"}} className='typeImages' src={Ground} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "rock" && <img style={{padding:"2px"}} className='typeImages' src={Rock} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "bug" && <img style={{padding:"2px"}} className='typeImages' src={Bug} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "ghost" && <img style={{padding:"2px"}} className='typeImages' src={Ghost} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "steel" && <img style={{padding:"2px"}} className='typeImages' src={Steel} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "stellar" && <img style={{padding:"2px"}} className='typeImages' src={Stellar} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "fire" && <img style={{padding:"2px"}} className='typeImages' src={Fire} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "water" && <img style={{padding:"2px"}} className='typeImages' src={Water} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "electric" && <img style={{padding:"2px"}} className='typeImages' src={Electric} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "psychic" && <img style={{padding:"2px"}} className='typeImages' src={Psychic} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "ice" && <img style={{padding:"2px"}} className='typeImages' src={Ice} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "dragon" && <img style={{padding:"2px"}} className='typeImages' src={Dragon} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "dark" && <img style={{padding:"2px"}} className='typeImages' src={Dark} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "fairy" && <img style={{padding:"2px"}} className='typeImages' src={Fairy} alt={`${pokemon.name}`} />}
            {pokemon.types[1].type.name == "???" && <img style={{padding:"2px"}} className='typeImages' src={Unknown} alt={`${pokemon.name}`} />}
            </div>}
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
    </div>
  );
};

export default PokemonApp;
