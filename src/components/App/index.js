import React from 'react';
// Ici, on importe le composant connecté plutôt
// que le composant de présentation
import NbColors from 'src/containers/NbColors';
import Colors from 'src/containers/Colors';
import ColorButtons from 'src/containers/ColorButtons';
import Gradient from 'src/containers/Gradient';

import DirectionButtons from '../DirectionButtons';

const App = () => (
  <div className="app">
    <NbColors />
    <ColorButtons />
    <Colors />
    <Gradient />
    <DirectionButtons />
  </div>
);

export default App;
