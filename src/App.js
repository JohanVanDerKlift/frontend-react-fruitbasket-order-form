import React, {useState} from 'react';
import './App.css';
import FruitCounter from "./components/FruitCounter";
import Input from "./components/Input"
import Select from "./components/Select"
import kiwi from "./assets/kiwi.png"
import aardbei from "./assets/aardbei.png"
import banaan from "./assets/banaan.png"
import appel from "./assets/appel.png"
import Button from "./components/Button";


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

  function handleReset() {
    setState({
      strawberry: 0,
      banana: 0,
      apple: 0,
      kiwi: 0,
    })
  }

  function handleChange(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const changedFieldName = e.target.name;
    console.log(value);
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
        <Button
          type="button"
          className="submit"
          onClick={handleReset}
        >Reset</Button>

        <Input
          name="firstName"
          className="label"
          type="text"
          value={state.firstName}
          handleChange={handleChange}
        >Voornaam</Input>

        <Input
          name="lastName"
          className="label"
          type="text"
          value={state.lastName}
          handleChange={handleChange}
        >Achternaam</Input>

        <Input
          name="age"
          className="label"
          type="text"
          value={state.age}
          handleChange={handleChange}
        >Leeftijd</Input>

        <Input
          name="zipCode"
          className="label"
          type="text"
          value={state.zipCode}
          handleChange={handleChange}
        >Postcode</Input>

        <Select
          name="frequentie"
          handleChange={handleChange}
          value={state.frequentie}
          options={options}
        >Bezorgfrequentie</Select>

        <div className="radio">
          <Input
            className="radio"
            name="timeOfDay"
            type="radio"
            value="overdag"
            checked={state.timeOfDay === "overdag"}
            handleChange={handleChange}
          >Overdag</Input>
        </div>
        <div className="radio">
          <Input
            className="radio"
            name="timeOfDay"
            type="radio"
            value="avond"
            checked={state.timeOfDay === "avond"}
            handleChange={handleChange}
          >'s Avonds</Input>
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
        <Button
          type="submit"
          className="submit"
          onClick={handleSubmit}
        >Verzend</Button>
      </form>
    </>
  );
}

export default App;
