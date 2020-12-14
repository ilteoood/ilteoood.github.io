import React from 'react';
import './App.scss';

import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('iLTeoooD')
                .pauseFor(1500)
                .deleteAll()
                .typeString('Matteo Pietro Dazzi')
                .start();
          }}
      />
    </div>
  );
}

export default App;
