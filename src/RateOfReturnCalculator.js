import React, { useState } from 'react';
import './RateOfReturnCalculator.css';

function RateOfReturnCalculator() {
  const [costBasis, setCostBasis] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [time, setTime] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState(null);
  const [growthMultiple, setGrowthMultiple] = useState(null);

  const calculateRateOfReturn = () => {
    if (time <= 0) {
      alert('Please enter a positive value for time (in years).');
      return;
    }

    const multiple = newPrice / costBasis;
    const returnRate = (Math.pow(multiple, 1 / time) - 1) * 100;
    setRateOfReturn(returnRate.toFixed(2));
    setGrowthMultiple(multiple.toFixed(2));
  };

  return (
    <div className="calculator">
      <div className="header">
        <h1>Rate of Return Calculator</h1>
      </div>
      <div className="input-group">
        <label htmlFor="costBasis">Cost Basis:</label>
        <input
          type="number"
          id="costBasis"
          value={costBasis}
          onChange={(e) => setCostBasis(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="newPrice">New Price:</label>
        <input
          type="number"
          id="newPrice"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="time">Time (in years):</label>
        <input
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={calculateRateOfReturn}>Calculate</button>
      {rateOfReturn && growthMultiple && (
        <div className="results">
          <h2>Results:</h2>
          <p>Annualized Rate of Return: {rateOfReturn}%</p>
          <p>Growth Multiple: {growthMultiple}x</p>
        </div>
      )}
    </div>
  );
}

export default RateOfReturnCalculator;
