# Mise en place de redux

## installation de redux

```
yarn add redux
```

## installation de redux-devtools-extension

```
yarn add redux-devtools-extension
```

## création des actions types et des actions creator

Dans _src/actions/index.js_ :

```js
export const ACTION_TYPE_1 = 'ACTION_TYPE_1';

export const actionType1 = () => ({type: ACTION_TYPE_1});

export const actionTypeAvecParam = (valParam) => ({type: ACTION_TYPE_1, param: ValParam});
```

## création du reducer

Un reducer est une fonction qui permet de traduire une intention (action)
En modification du state.

Le recucer renvoit une nouvelle version du state en cas de modification et le 
state non modifié si aucune action ne correspond.

Dans _reducers/index.js :

```js
// on importe nos action types
import {ACTION_TYPE_1} from 'src/actions/index.js';

// valeur initiale du state
const initialState = {
  prop1: 'val1',
}

export default (state = initialState, action= {}) => {
  switch (action.type){
    case ACTION_TYPE_1 : 
      return {
        ...state,
        prop1: 'newVal1',
      };
    default:
      return state;
  };
}
```

## création du store

Le store a besoin d'un reducer pour fonctionner.
On peut également s'appuyer sur redux-devtools-extension pour debugger

Dans _store/index.js_ :

```js
import { createStore } from 'redux';
// on importe l'enhancer permettant de brancher le store à redux devtools
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from 'src/reducers';

export default store = createStore(reducer, devToolsEnhancer());

```

## utilisation du store

Dans notre application (_src/index.js_ par exemple)

```js

// on importe le store
import store from 'src/store';

// on importe nos action types
import {ACTION_TYPE_1, actionTypes1} from 'src/actions/index.js';

// une fois le store importé, on peut :

// 1 - lire le state grâce ) :
const state = store.getState();
// ou, si on a besoin d'une propriété en particulier
const { prop1 } = store.getState();

// 2 - emmettre des intentions (des actions)
// sans action type
store.dispatch({ type: 'ACTION_TYPE_1'});
// avec action type
store.dispatch({ type: ACTION_TYPE_1});
// avec action creator 
store.dispatch(actionType1());
// avec action creator et param
store.dispatch(actionTypeAvecParam('mon param'));

// 3 - Abonner des fonctions aux modifications du state
// ces fonfions seront automatiquement appelées par le state
// après chaque modification.
store.subscribe(maFonctionDAfichage);

```
