import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [currency, setCurrency] = useState('');
  const [converted, setConverted] = useState('');

  // Static exchange rates (you can connect to an API later)
  const exchangeRates = {
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0097,
    JPY: 1.75
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(rupees);
    const rate = exchangeRates[currency.toUpperCase()];

    if (isNaN(amount)) {
      alert("Enter a valid number for INR");
      return;
    }

    if (!rate) {
      alert("Unsupported currency. Try: USD, EUR, GBP, JPY");
      return;
    }

    const result = (amount * rate).toFixed(2);
    setConverted(`${result} ${currency.toUpperCase()}`);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Currency Converter (INR to Selected Currency)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rupees (INR): </label>
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Currency (e.g., USD, EUR): </label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          />
        </div>
        <button type="submit">Convert</button>
      </form>
      {converted && (
        <p>
          Converted Amount: <strong>{converted}</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
