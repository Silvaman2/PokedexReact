import React, { useEffect, useState } from "react";
import PokeAPI from "pokedex-promise-v2";
import "./PokemonList.css";
import { Link } from "react-router-dom";
const pokemonCount = 386;
const P = new PokeAPI();

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);



    
    React.useEffect(function() {
        const promises = [];
        for(let i = 1; i <= pokemonCount; i++) {
            const URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(URL).then(request => request.json()));
        }
        Promise.all(promises).then(results => {
            const pokemons = results.map((data, i) => {
                const name = data[`name`];
                const sprite = data[`sprites`][`versions`][`generation-iii`][`emerald`][`front_default`];

                return {
                    name:name,
                    sprite:sprite,
                    id:i + 1
                }
            })
            setPokemonList(pokemons);
        })
    }, []);

    return <div className="pokemonlistcontainer">
        {
            pokemonList.map(pokemon => (
                <Link to={`/pokemon/${pokemon.id}`} className="pokemonbutton" key={pokemon.id}>
                    <img src={pokemon.sprite} className="pokemonlistsprite"></img>
                    <sup className="pokemonlistid">No.{pokemon.id}</sup>
                    <p className="pokemonlistname">{pokemon.name.toUpperCase()}</p>
                </Link>
            ))
        }
    </div>
}





export default PokemonList;