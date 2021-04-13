import React from 'react';
// Ici, on a besoin d'emettre une intention vers le store
// On va pouvoir utilise le hook useDispatch
// on récupèrera grâce à lui une référence à la fonction dispatch du store
import { useDispatch } from 'react-redux';

import { randomHexColor } from 'src/utils';

const ColorButtons = () => {
  const dispatch = useDispatch();

  const handleFirstColorButtonClick = () => {
    dispatch({ type: 'CHANGE_FIRST_COLOR', newColor: randomHexColor() });
  };

  const handleLastColorButtonClick = () => {
    dispatch({ type: 'CHANGE_LAST_COLOR', newColor: randomHexColor() });
  };

  const handleAllColorButtonClick = () => {
    dispatch({ type: 'CHANGE_FIRST_COLOR', newColor: randomHexColor() });
    dispatch({ type: 'CHANGE_LAST_COLOR', newColor: randomHexColor() });
  };

  return (
    <div className="buttons group">
      <button type="button" className="button" id="randFirst" onClick={handleFirstColorButtonClick}>Random First</button>
      <button type="button" className="button" id="randAll" onClick={handleAllColorButtonClick}>Random All</button>
      <button type="button" className="button" id="randLast" onClick={handleLastColorButtonClick}>Random Last</button>
    </div>
  );
};

export default ColorButtons;
