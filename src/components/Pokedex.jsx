import { useState } from 'react';
import PokemonDisplay from './PokemonDisplay';
import PokemonInput from './PokemonInput';

function Pokedex() {
    const [pokemon, setPokemon] = useState('');
    const [errorResponse, setErrorResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
console.log(isLoading);
    return (
        <div id="pokedex">
            <PokemonDisplay pokemon={pokemon} errorResponse={errorResponse} isLoading={isLoading}/>
            <PokemonInput setPokemon={setPokemon} setErrorResponse={setErrorResponse} setIsLoading={setIsLoading}/>
        </div>
    );
}

export default Pokedex;