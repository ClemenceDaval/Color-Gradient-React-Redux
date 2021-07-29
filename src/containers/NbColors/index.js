// Ici, on va connecter notre composant de présentation NbColors
// au state grâce à la fonction connect proposée par react redux

// on importe la fonction connect
import { connect } from 'react-redux';

// on importe le composant que l'on souhaite connecter
import NbColors from 'src/components/NbColors';

// on définit une fonction (mapStateToProps)
// qui indique comment brancher les propriétés du composant
// de présentation en LECTURE sur le state (gardé par notre store)
const mapStateToProps = (state) => ({
  nbColors: state.nbColors,
});

// L'appel de connect auquel on passe en argument
// la fonction précédemment définie retourne une nouvelle fonction
// que l'on pourra appliquer sur le composant à connecter pour le
// connecter effectivement au store.
// const connector = connect(mapStateToProps);

// on obtient ainsi un composant connecté
// const connectedNbColors = connector(NbColors);

// c'est ce composant connecté que l'on va exporter
// pour qu'il puisse être utilisé dans notre application
// export default connectedNbColors;

// ce qui donne en une seule ligne :
export default connect(mapStateToProps)(NbColors);
