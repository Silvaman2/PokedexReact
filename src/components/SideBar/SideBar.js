import React from "react";
import PokemonList from "../PokemonList/PokemonList";
import "./SideBar.css";

function SideBar() {
    return (
        <div className="sidebarcontainer">
            <PokemonList />
        </div>
    )
}


export default SideBar;