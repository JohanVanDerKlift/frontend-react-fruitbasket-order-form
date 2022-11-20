import React from 'react';
import './App.css';
import FruitCounter from "./components/FruitCounter";
import kiwi from "./assets/kiwi.png"
import aardbei from "./assets/aardbei.png"
import banaan from "./assets/banaan.png"
import appel from "./assets/appel.png"

function App() {
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <ul className="fruit-list">
        <FruitCounter image={aardbei} item="Aardbei"/>
        <FruitCounter image={banaan} item="banaan"/>
        <FruitCounter image={appel} item="appel"/>
        <FruitCounter image={kiwi} item="kiwi"/>
      </ul>

    </>
  );
}

export default App;
