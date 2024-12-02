import React from 'react';
import './profile.css';  // Import the CSS file

// Functional Component with props
function Greeting(props) {
  return (
    <div className="card">
      <h2>Greeting Card</h2>
      <p><span>Name:</span> {props.name}</p>
      <p><span>Age:</span> {props.age}</p>
      <p><span>Occupation:</span> {props.occupation}</p>
      <p><span>Location:</span> {props.Location}</p>
    </div>
  );
}

export default Greeting;
