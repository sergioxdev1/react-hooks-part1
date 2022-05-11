import React from 'react';
import './style.css';

export default function Comp(props) {
  return (
    <div>
      <h1>COMP</h1>
      <p>The good way</p>
      <span>{props.name}</span>
      <br />
      <span>{props.city}</span>
      <br />
      <span>{props.tel}</span>
    </div>
  );
}
