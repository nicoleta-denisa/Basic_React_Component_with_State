import React, { useState} from 'react';

import './colors.css';

const colors = ["#bada55", "#ff0000", "#a38181"];

function App() {
  const [color, setColor] = useState(colors[0]);

  function handleClick() { 
    function random() {
      return parseInt(Math.floor(Math.random() * colors.length));
    }
    setColor (colors[random()]);
  }
  
  return (
    <div>
      <h1>Changing color scheme</h1>
      <br></br>
      <span style={ {backgroundColor: color}}  className="content">Currently Selected Color { color } </span>
      <button onClick={ () => handleClick() } className="button">Change Color</button>    
    </div>
  )
} 

export default App;