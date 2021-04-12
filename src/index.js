// on importe le store
import store from 'src/store';
import { changeDirectionToRight, changeDirectionToLeft, changeFirstColor, changeLastColor } from './actions';

// == Imports
import { randomHexColor, generateSpanColor } from './utils';

// on peut voir que le store nous expose 3 fonctions principales
// getState
// dispatch
// subscribe
console.log(store);

// la méthode subscribe permet de demander au store la valeur courante du state
console.log(store.getState());

// la méthode dispatch permet de demander au store à ce qu'une action soit accomplie
// store.dispatch({ type: 'CHANGE_DIRECTION_TO_RIGHT' });

// la méthode subsribe permet de s'abonner aux modifications du state
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}

// rend le bloc de dégradé
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // pour changer les 2 couleurs, il suffit d'emmettre nos 2 intentions :
    // - changer la première couleur
    // - changer la deuxième couleur
    store.dispatch(changeLastColor(randomHexColor()));
    store.dispatch(changeFirstColor(randomHexColor()));
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch(changeFirstColor(randomHexColor()));
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch(changeLastColor(randomHexColor()));
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // hey le store, change la direction vers la droite

    // notre intention est représentée par un objet
    // action dont la propriété type (convention)
    // permet de définir l'action à accomplir
    /*
    Avant les action creators :
    const changeDirectionToLeftAction = {
      type: CHANGE_DIRECTION_TO_LEFT,
    };
    store.dispatch(changeDirectionToLeftAction);
    */

    store.dispatch(changeDirectionToLeft());

    // on n'a plus besoin de demander le rafraichissement de l'interface
    // nous avons abonné nos fonctions de rendu aux modifications du state
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    // on emmet simplement notre intention
    // ici, c'est l'exécution de notre action creator qui retourne 
    // l'objet de type action à dispatcher
    store.dispatch(changeDirectionToRight());
  });
