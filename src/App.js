import React, { Component } from "react";
import "./App.css";

import CurrencyConverter from "./Components/CurrencyConverter.js";
import CurrencyDisplay from "./Components/CurrencyDisplay.js";

class App extends Component {
  render() {
    return (
      <>
        <h2>Render Props</h2>
        <CurrencyConverter render={(currencyData, amount) => ( 
              // US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
              // {currencyData.symbol}
              // {(amount * currencyData.rate).toFixed(2)}
              <CurrencyDisplay currencyData={currencyData} amount={amount} />
    )} 
          />
      </>
    )
  }
}

export default App;
