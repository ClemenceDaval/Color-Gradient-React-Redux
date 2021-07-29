import { connect } from 'react-redux';
import DirectionButton from 'src/components/DirectionButton';

import { changeDirection } from 'src/actions';

// on va pouvoir s'appuyer sur nos ownProps
// pour déterminer si la propriété active
// que l'on va transmettre à notre composant de
// présentation doit valoir vrai ou faux.
const mapStateToProps = (state, ownProps) => ({
  isActive: state.direction === ownProps.direction,
});

// ici encore, la direction dans laquelle on souhaite aller
// au click sur le bouton est déterminée par la valeur de la prop
// direction que notre container recoit lors de son instanciation
// dans components/DirectionButtons/index.js
const mapDispatchToProps = (dispatch, ownProps) => ({
  manageClick: () => {
    dispatch(changeDirection(ownProps.direction));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectionButton);
