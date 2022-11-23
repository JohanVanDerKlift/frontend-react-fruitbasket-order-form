import React, {useState} from 'react';
import './App.css';
import FruitCounter from "./components/FruitCounter";
import Input from "./components/Input"
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
    firstName: "",
    lastName: "",
    age: 0,
    zipCode: "",
    frequentie: "",
    timeOfDay: "",
    remarks: "",
    terms: false,
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

  function handleChange(e) {
    const changedFieldName = e.target.name;
    setState({
      ...state,
      [changedFieldName]: e.target.value,
    })
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

      <form action="">
        <Input
          name="firstName"
          type="text"
          value={state.firstName}
          handleChange={handleChange}
        >Voornaam</Input>
        <Input
          name="lastName"
          type="text"
          value={state.lastName}
          handleChange={handleChange}
        >Achternaam</Input>
        <Input
          name="age"
          type="text"
          value={state.age}
          handleChange={handleChange}
        >Leeftijd</Input>
        <Input
          name="zipCode"
          type="text"
          value={state.zipCode}
          handleChange={handleChange}
        >Postcode</Input>
        <label htmlFor="frequentie">Bezorgfrequentie<br/>
          <select name="frequentie" id="frequentie">
            <option value="Iedere week">Iedere week</option>
            <option value="Om de week">Om de week</option>
            <option value="Iedere maand">Iedere maand</option>
          </select>
        </label>
        <label htmlFor="overdag">
          <input type="radio" id="overdag" name="timeOfDay"/>
          Overdag
        </label>
        <label htmlFor="savonds">
          <input type="radio" id="savonds" name="timeOfDay"/>
          's Avonds
        </label>
        <label htmlFor="remarks">Opmerkingen <br/>
          <textarea name="remarks" id="remarks" cols="50" rows="10"></textarea>
        </label>
        <label htmlFor="terms">
          <input type="checkbox" id="terms"/>
          Ik ga akkoord met de voorwaarden
        </label>
        <button type="submit">Verzend</button>
      </form>
    </>
  );
}

export default App;
