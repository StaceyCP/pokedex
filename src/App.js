import { useState } from 'react';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';

function App() {
const [pokemon, setPokemon] = useState('');
const [searchValue, setSearchValue] = useState('');
const [errorResponse, setErrorResponse] = useState('');
const capitaliseFirstLetter = string => string[0].toUpperCase() + string.slice(1);


const fetchPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
  if (response.status === 404) {
    setErrorResponse("Pokemon not found")
    setPokemon("")
  } else if (!response.ok) {
    setErrorResponse("Something went wrong. Please try again")
    setPokemon("")
  }
  const data = await response.json();

  setPokemon(data);
  setErrorResponse("");
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
        {/*  */}
        {pokemon && 
          <>
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} className="pokemonSprite"></img>
            <div className="pokemonInformationContainer__data">
              <p>No. {pokemon.id}</p>
              <p>{capitaliseFirstLetter(pokemon.name)}</p> 
              <div>{pokemon.types.map(type => {
                return (
                  <img src={`images/${type.type.name}.png`} alt={`${type.type.name}`} className="pokemonType"></img>
                )}
              )}</div>    
            </div>
          </>
        }
      </div>
      <div className='errorContainer'>
        {errorResponse && 
          <>
            <img src="images/sad.png" alt="sad face icon" className="errorImage"></img>
            <p className="errorText">{errorResponse}</p>
          </>
        }
      </div>
      <form className="searchField">
        <Tooltip 
          title="For pokemon that are also identified by gender please write -f for females or -m for males" 
          arrow={true} 
          componentsProps={{ 
            tooltip: { 
              sx: { 
                backgroundColor: 'white',
                color: 'black',
              }
            },
            arrow: { 
              sx: { 
                color: 'white',
              }
            },
          }}
        >
            <input 
              className="searchField__input"
              onChange={handleInput} 
              name='pokemon search'
              placeholder='Search Pokemon'
              value={searchValue}
            >
            </input>
        </Tooltip>
        <button onClick={buttonClick} className="searchField__button"><SearchIcon/></button>
      </form>
    </div>
  );
}

export default App;
