// On déclare nos ACTION TYPES et on les met à disposition du reste
// du monde : typiquement : aux gestionnaires d'évènements et aux reducers
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
// export const CHANGE_DIRECTION_TO_RIGHT = 'CHANGE_DIRECTION_TO_RIGHT';
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';

// on déclare nos action creators
// Un action creator est une fonction dont le but est de créer
// une action.
// ie : un objet du genre :
// {
//   type: UN_ACTION_TYPE
// }
// export const changeDirectionToRight = () => ({ type: CHANGE_DIRECTION_TO_RIGHT });
// équivalent à :
/*
export const changeDirectionToRight = function(){
  return {
    type: CHANGE_DIRECTION_TO_RIGHT,
  };
}
*/

// export const changeDirectionToLeft = () => ({ type: CHANGE_DIRECTION_TO_LEFT });

export const changeDirection = (newDirection) => (
  {
    type: CHANGE_DIRECTION,
    newDirection: newDirection,
  }
);

// cette approche est surtout intéressante
// quand l'action à créer possède un payload
// pas besoin de se rappeler du nom de la propriétés où stocker
// la valeur.
export const changeFirstColor = (newColor) => (
  {
    type: CHANGE_FIRST_COLOR,
    newColor: newColor,
  }
);

export const changeLastColor = (newColor) => (
  {
    type: CHANGE_LAST_COLOR,
    newColor: newColor,
  }
);
