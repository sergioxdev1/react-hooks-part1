import React from 'react';
import './style.css';

export default function App(props) {
  return (
    <div>
      <h1>External Component</h1>
      <p>The good way</p>
      <span>{props.name}</span>
      <br />
      <span>{props.city}</span>
      <br />
      <span>{props.tel}</span>
    </div>
  );
}
