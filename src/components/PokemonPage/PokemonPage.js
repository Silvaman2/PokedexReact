import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonPage.css";
import pokeball from "../../assets/pokeball.png";


function PokemonPage() {
    let [currentPokemon, setPokemon] = useState();
    const { pokemonid } = useParams();

    React.useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonid}`;
        async function fetchPokemon() {
            const request = await fetch(url);
            const data = await request.json();

            const name = data[`name`];
            const sprite = data[`sprites`][`versions`][`generation-iii`][`emerald`][`front_default`];


            const speciesRequest = await fetch(data[`species`][`url`]);
            const species = await speciesRequest.json();

            const description = species
            [`flavor_text_entries`]
            .find(currentVersion => currentVersion[`version`][`name`] === `emerald`)
            [`flavor_text`];

            const height = data[`height`];

            setPokemon({
                name:name,
                description:description,
                height:height,
                sprite:sprite,
                id:pokemonid
            });
        }
        fetchPokemon();
    }, [pokemonid])
    console.log(currentPokemon);

    return (
        <div className="pokemonpagecontainer">
            {currentPokemon ? 
            (
                <>
                    <img src={currentPokemon[`sprite`]} className="pokemonsprite"></img>
                    <div className="pokemonnamebox">
                        <div className="pokeball">
                            <img src={pokeball} className="pokeballicon"></img>
                        </div>
                        <p className="pokemonid">{pokemonid}</p>
                        <p className="pokemonname">{currentPokemon.name.toUpperCase()}</p>
                    </div>
                </>
            ) :
            null
            
            }
        </div>
    )
}

export default PokemonPage;