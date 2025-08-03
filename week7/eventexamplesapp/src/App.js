import React from 'react';
import Counter from './Counter';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Event Examples</h1>
      <Counter />
      <CurrencyConverter />
    </div>
  );
}

export default App;
