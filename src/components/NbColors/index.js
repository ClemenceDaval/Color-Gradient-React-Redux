import React from 'react';
// on importe le hook useSelector
// qui va nous permettre d'accéder en lecture
// au state 'gardé par le store)
import { useSelector } from 'react-redux';

const NbColors = () => {
  // on utilise le hook useSelector
  // on donne à ce hook un callback avec un paramètre
  // permettant d'accéder au store.
  // ce callback doit permettre de renvoyer l'information
  // utile depuis le state.
  const nbColors = useSelector((state) => state.nbColors);
  return (
    <div id="nbColors">
      {nbColors} couleur(s) générée(s)
    </div>
  );
};

export default NbColors;
