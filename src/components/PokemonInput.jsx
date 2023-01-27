import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

function PokemonInput({setPokemon, setErrorResponse}) {
    const [searchValue, setSearchValue] = useState('');
    
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
    );
}

export default PokemonInput;