import './App.css';
import React, { useState, useEffect } from 'react';
import CurrencyRow from './CurrencyRow';

const BASE_URL = "http://api.exchangeratesapi.io/v1/latest?access_key=70836b7123bee0bab3f0cc6534516fc9";

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let amountTo, amountFrom;
  if (amountInFromCurrency) {
    amountFrom = amount;
    amountTo = amount * exchangeRate;
  } else {
    amountTo = amount;
    amountFrom = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0];
      setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      setFromCurrency([data.base]);
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    });
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])
  
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyRow 
      currencyOptions={currencyOptions} 
      selectedCurrency={fromCurrency}
      onChangeCurrency={e => setFromCurrency(e.target.value)}
      amount={amountFrom}
      onChangeAmount={handleFromAmountChange}
      />
      <p className='equals'>=</p>
      <CurrencyRow 
      currencyOptions={currencyOptions} 
      selectedCurrency={toCurrency}
      onChangeCurrency={e => setToCurrency(e.target.value)}
      amount={amountTo}
      onChangeAmount={handleToAmountChange}
      />
    </div>
  );
}

export default App;
