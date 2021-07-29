import React from 'react';
// Ici, on importe le composant connecté plutôt
// que le composant de présentation
import NbColors from 'src/containers/NbColors';
import Colors from 'src/containers/Colors';
import ColorButtons from 'src/containers/ColorButtons';
import DirectionButtons from '../DirectionButtons';
import Gradient from '../Gradient';

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
