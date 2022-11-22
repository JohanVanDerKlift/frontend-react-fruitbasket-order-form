import React, {useState} from 'react';
import './App.css';
import FruitCounter from "./components/FruitCounter";
import kiwi from "./assets/kiwi.png"
import aardbei from "./assets/aardbei.png"
import banaan from "./assets/banaan.png"
import appel from "./assets/appel.png"

function App() {
  const [ state, setState ] = useState({
    strawberry: 0,
    banana: 0,
    apple: 0,
    kiwi: 0,
  });

  function addOne(e) {
    const changedItem = e.target.name;
    console.log(changedItem);
    setState({
      ...state,
      [changedItem]: state[changedItem].valueOf() + 1,
    });
  }

  function subtractOne(e) {
    const changedItem = e.target.name;
    if (state[changedItem].valueOf() > 0) {
      setState({
        ...state,
        [changedItem]: state[changedItem].valueOf() - 1,
      });
    }
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <ul className="fruit-list">
        <FruitCounter
          name="strawberry"
          image={aardbei}
          item="Aardbei"
          addOne={addOne}
          subtractOne={subtractOne}
          value={state.strawberry}
        />
        <FruitCounter
          name="banana"
          image={banaan}
          item="banaan"
          addOne={addOne}
          subtractOne={subtractOne}
          value={state.banana}
        />
        <FruitCounter
          name="apple"
          image={appel}
          item="appel"
          addOne={addOne}
          subtractOne={subtractOne}
          value={state.apple}
        />
        <FruitCounter
          name="kiwi"
          image={kiwi}
          item="kiwi"
          addOne={addOne}
          subtractOne={subtractOne}
          value={state.kiwi}
        />
        <button type="button" onClick={() => {
          setState({
            strawberry: 0,
            banana: 0,
            apple: 0,
            kiwi: 0,
          });
          FruitCounter(state);
        }}>Reset</button>
      </ul>
    </>
  );
}

export default App;
