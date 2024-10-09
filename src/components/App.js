
import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState();
  console.log(text);

  return (
    <div>
      <label htmlFor='ip'>Enter your name</label>
      <input id='ip' type='text' onChange={(e) => {
        setText(e.target.value);
      }}/>

        {/* Do not remove the main div */}

      <p>{text && `Hello ${text}`}</p>
    </div>
  )
}

export default App
