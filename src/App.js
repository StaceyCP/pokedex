import { useState } from 'react';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';

function App() {
const [pokemon, setPokemon] = useState('');
const [searchValue, setSearchValue] = useState('');
const [errorResponse, setErrorResponse] = useState('');
const capitaliseFirstLetter = string => string[0].toUpperCase() + string.slice(1);


const fetchPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
  if (response.status === 404) {
    setErrorResponse("Pokemon not found")
  } else if (!response.ok) {
    setErrorResponse("Something went wrong. Please try again")
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
      <h1 className="title">Pokedex</h1>
      <div className="pokemonInformationContainer">
        {pokemon && 
          <>
            <img src={require(`./pokedexImg/${pokemon.name}.jpg`)} alt={`${pokemon.name} sprite`}></img>
            <div className="pokemonInformationContainer__data">
              <p>Pokemon name: {capitaliseFirstLetter(pokemon.name)}</p>
              <p>Pokemon ID: {pokemon.id}</p> 
            </div>
          </>
        }
      </div>
      <form className="searchField">
        <input 
          className="searchField__input"
          onChange={handleInput} 
          name='pokemon search'
          placeholder='Search Pokemon Name'
          value={searchValue}
        >
        </input>
        <button onClick={buttonClick} className="searchField__button"><SearchIcon/></button>
      </form>
    </div>
  );
}

export default App;
