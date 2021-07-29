import React from 'react';
import { useSelector } from 'react-redux';

const Colors = () => {
  // si on a besoin de plusieurs information
  // il est tout à fait possible d'appeler plusieur fois le hook
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  return (
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>
      -
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
};

export default Colors;
