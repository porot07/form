import React from 'react';

const CounterPay = ({ modules, payed }) => {
  return (
  <div id="counter-container">
    {modules.map((cube, index) => (
      <div key={index} className={`block-payed-color${index < payed ? 'green' : ''}`}></div>
    ))}
  </div>);
};

export default CounterPay;
