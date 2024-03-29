import Loading from "./Loading";

function PokemonDisplay({errorResponse, pokemon, isLoading}) {
    const capitaliseFirstLetter = string => string[0].toUpperCase() + string.slice(1);
    return (
        <>
            <div className="pokemonInformationContainer">
                {isLoading && <Loading/>}
                {pokemon && !isLoading && 
                <>
                    <img src={pokemon.spriteurl} alt={`${pokemon.name} sprite`} className="pokemonSprite"></img>
                    <div className="pokemonInformationContainer__data">
                    <p>No. {pokemon.id}</p>
                    <p>{capitaliseFirstLetter(pokemon.name)}</p> 
                    <div>{pokemon.type.map(type => {
                        return (
                        <img src={`images/${type}.png`} alt={`${type}`} className="pokemonType"></img>
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
        </>
    );
}

export default PokemonDisplay;