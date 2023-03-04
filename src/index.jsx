import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import palettes from "./palettes.js";
import Palette from './Palette/Palette.jsx';



const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((palette) => (
          <div className="palette" key={palette.name}>
            <div className="palette-scheme palette-scheme--vertical">
              <img className="scheme-image" src={palette.image} alt={palette.name} />
              <div className="scheme-colors">
                <Palette colors={palette.colors} />
              </div>
              </div>
            <div className="palette-info">
              <h2>{palette.name}</h2>
              <p>{palette.description}</p>
              <p>Photo by <a href={palette.attribution.url} target="_blank">{palette.attribution.name}</a>.</p>
            </div>
          </div>                 
         ))} 


      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);


// palette-scheme--horizontal"