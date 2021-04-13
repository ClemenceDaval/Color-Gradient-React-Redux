import React from 'react';
import ColorButtons from '../ColorButtons';
import Colors from '../Colors';
import DirectionButtons from '../DirectionButtons';
import Gradient from '../Gradient';
import NbColors from '../NbColors';

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
