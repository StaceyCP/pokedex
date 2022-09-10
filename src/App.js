import { useState } from 'react';
import './App.css';

function App() {
const [pokemon, setPokemon] = useState('');
const [searchValue, setSearchValue] = useState('');
const capitaliseFirstLetter = string => string[0].toUpperCase() + string.slice(1);


const fetchPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
  if (response.status === 404) {
    console.log("Pokemon not found")
  } else if (!response.ok) {
    console.log("Something went wrong. Please try again")
  }
  const data = await response.json();

  setPokemon(data);
}

const handleInput = (e) => {
  setSearchValue(e.target.value.toLowerCase());
}

const buttonClick = (e) => {
  e.preventDefault();
  fetchPokemon();
}

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {pokemon && 
        <>
          <img src={require(`./pokedexImg/${pokemon.name}.jpg`)} alt={`${pokemon.name} sprite`}></img>
          <p>Pokemon name: {capitaliseFirstLetter(pokemon.name)}</p>
          <p>Pokemon ID: {pokemon.id}</p> 
        </>
      }
      <form className="searchField">
        <input 
          className="searchField__input"
          onChange={handleInput} 
          name='pokemon search'
          placeholder='Search Pokemon Name'
          value={searchValue}
        >
        </input>
        <button onClick={buttonClick} className="searchField__button">Search</button>
      </form>
    </div>
  );
}

export default App;
