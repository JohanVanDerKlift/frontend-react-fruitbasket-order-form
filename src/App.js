import React, {useState} from 'react';
import './App.css';
import FruitCounter from "./components/FruitCounter";
import Input from "./components/Input"
import kiwi from "./assets/kiwi.png"
import aardbei from "./assets/aardbei.png"
import banaan from "./assets/banaan.png"
import appel from "./assets/appel.png"
import fruitCounter from "./components/FruitCounter";
import Select from "./components/Select"

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

  function handleFruitCount(e, int) {
    const changedItem = e.target.name;
    const value = state[changedItem].valueOf() + int;
    setState({
      ...state,
      [changedItem]: value,
    })
  }

  function addOne(e) {
    const changedItem = e.target.name;
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
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const changedFieldName = e.target.name;
    setState({
      ...state,
      [changedFieldName]: value,
    })
  }

  function handleSubmit(e) {
    console.log(`Fruitmand bezorgservice formulier
    Bestelling:
    Aardbeien:        ${state.strawberry}
    Bananen:          ${state.banana}
    Appels:           ${state.apple}
    Kiwi:             ${state.kiwi}
    _______________________________________
    Gegevens:
    Naam:             ${state.firstName} ${state.lastName}
    Leeftijd:         ${state.age}
    Postcode:         ${state.zipCode}
    Bezorgfrequentie  ${state.frequentie}
    Tijdvak:          ${state.timeOfDay}
    Opmerkingen:      ${state.remarks}
    Voorwaarden:      ${state.terms}
    `);
    e.preventDefault();
  }

  const options = [
    {
      value: "Iedere week"
    },
    {
      value: "Om de week"
    },
    {
      value: "Iedere maand"
    }
  ];

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

      <form onSubmit={handleSubmit}>
        <FruitCounter
          name="strawberry"
          image={aardbei}
          item="Aardbei"
          handleFruitCount={handleFruitCount}
          value={state.strawberry}
        />
        <FruitCounter
          name="banana"
          image={banaan}
          item="banaan"
          handleFruitCount={handleFruitCount}
          value={state.banana}
        />
        <FruitCounter
          name="apple"
          image={appel}
          item="appel"
          handleFruitCount={handleFruitCount}
          value={state.apple}
        />
        <FruitCounter
          name="kiwi"
          image={kiwi}
          item="kiwi"
          handleFruitCount={handleFruitCount}
          value={state.kiwi}
        />
        <button type="button" onClick={() => {
          setState({
            strawberry: 0,
            banana: 0,
            apple: 0,
            kiwi: 0,
          });
          // FruitCounter(state);
        }}>Reset</button>

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

        <label htmlFor="frequentie" className="label">Bezorgfrequentie<br/>
          <select name="frequentie" id="frequentie" onChange={handleChange} value={state.value}>
            {options.map((option) => (
              <option value={option.value}>{option.value}</option>
            ))}
          </select>
        </label>
        {/*<Select*/}
        {/*  name="frequentie"*/}
        {/*  handleChange={handleChange}*/}
        {/*  value={state.frequentie}*/}
        {/*  options={options}*/}
        {/*>Bezorgfrequentie</Select>*/}
        {/*<label htmlFor="frequentie" className="label">Bezorgfrequentie<br/>*/}
        {/*  <select name="frequentie" id="frequentie" onChange={handleChange} value={state.frequentie}>*/}
        {/*    <option value="Iedere week">Iedere week</option>*/}
        {/*    <option value="Om de week">Om de week</option>*/}
        {/*    <option value="Iedere maand">Iedere maand</option>*/}
        {/*  </select>*/}
        {/*</label>*/}
        <div className="radio">
          <label htmlFor="overdag" className="radio">
            <input
              type="radio"
              id="overdag"
              name="timeOfDay"
              value="overdag"
              checked={state.timeOfDay === "overdag"}
              onChange={handleChange}
            />
            Overdag
          </label>
        </div>
        <div className="radio">
          <label htmlFor="savonds" className="radio">
            <input
              type="radio"
              id="savonds"
              name="timeOfDay"
              value="savonds"
              checked={state.timeOfDay === "savonds"}
              onChange={handleChange}
            />
            's Avonds
          </label>
        </div>
        <label htmlFor="remarks">Opmerkingen <br/>
          <textarea
            name="remarks"
            id="remarks"
            cols="50"
            rows="10"
            value={state.remarks}
            onChange={handleChange}
          ></textarea>
        </label>
        <label htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
            className="terms"
            name="terms"
            checked={state.terms}
            onChange={handleChange}
          />
          Ik ga akkoord met de voorwaarden
        </label>
        <button type="submit" className="submit">Verzend</button>
      </form>
    </>
  );
}

export default App;
