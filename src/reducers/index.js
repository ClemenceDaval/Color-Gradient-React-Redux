/* eslint-disable arrow-body-style */
// on stocke l'état initial de notre application

import { CHANGE_DIRECTION_TO_LEFT, CHANGE_DIRECTION_TO_RIGHT, CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR } from "../actions";

// dans une variable (constante plutôt)
const initialState = {
  firstColor: '#ff0000',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// un reducer est une fonction qui permet de définir la prochaine
// valeur du state en fonction de deux paramètres :
// - la version courante du state
// - l'action à traiter
// On donne des valeurs par défaut à nos paramètre :
// - la valeur initiale du state pour state
// - un objet vide pour action
const reducer = (state = initialState, action = {}) => {
  // pour l'instant notre reducer ne fait pas grand chose,
  // il se contente de renvoyer le state non modifié

  // en fonction de l'action à effectuer, on retourne une copie
  // du state courant auquel on change seulement ce qui est
  // induit par l'action demandée
  switch (action.type) {
    case CHANGE_DIRECTION_TO_LEFT:
      return {
        ...state,
        direction: '270deg',
      };
    case CHANGE_DIRECTION_TO_RIGHT:
      return {
        ...state,
        direction: '90deg',
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        firstColor: action.newColor,
        nbColors: state.nbColors + 1,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state,
        lastColor: action.newColor,
        nbColors: state.nbColors + 1,
      };
    default:
      return state;
  }
};

export default reducer;
