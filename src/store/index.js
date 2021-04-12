// Pour créer un nouveau store:

// On importe le fonction createStore depuis la bibliothèque redux
import { createStore } from 'redux';
// POur brancher notre application au debuger : redux devtools,
// On importe la fonction devToolsEnhancer depuis redux-devtools-extension
import { devToolsEnhancer } from 'redux-devtools-extension';

// On importe notre reducer (l'employé du state)
import reducer from 'src/reducers';

// On importe notre reducer (l'employé du state)
// c'est le maillon qui va s'occuper effectivement de la mise à jour du state

// On utilise createStore pour obtenir un nouveau store
// (le gardien du state, mais aussi notre commis)
// lors de la création du store, on passe le résultat de l'appel
// à devToolsEnhancer en deuxième argument de createStore
const store = createStore(reducer, devToolsEnhancer());

// on met à disposition le store à notre application
export default store;
