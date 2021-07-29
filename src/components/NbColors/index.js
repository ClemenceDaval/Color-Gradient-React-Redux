// Ici, on peut noter que notre composant
// de présentaion reste un composant de présentation
// Il n'a pas besoin de savoir d'où vient l'information qu'il doit afficher
import React from 'react';
import PropTypes from 'prop-types';

const NbColors = ({ nbColors }) => (
  <div id="nbColors">
    {nbColors} couleur(s) générée(s)
  </div>
);

NbColors.propTypes = {
  nbColors: PropTypes.number.isRequired,
};

export default NbColors;
