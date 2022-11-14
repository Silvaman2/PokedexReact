import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import SideBar from "./SideBar/SideBar";
import PokemonPage from "./PokemonPage/PokemonPage";

function App() {
    return (
        <div className="app">
            <SideBar />
            <Routes>
                <Route path="pokemon/:pokemonid" element={<PokemonPage />}></Route>
            </Routes>
        </div>
    );
}


export default App;