import { useState } from 'react';
import PokemonDisplay from './PokemonDisplay';
import PokemonInput from './PokemonInput';

function Pokedex() {
    const [pokemon, setPokemon] = useState('');
    const [errorResponse, setErrorResponse] = useState('');

    return (
        <div id="pokedex">
            <PokemonDisplay pokemon={pokemon} errorResponse={errorResponse}/>
            <PokemonInput setPokemon={setPokemon} setErrorResponse={setErrorResponse}/>
        </div>
    );
}

export default Pokedex;