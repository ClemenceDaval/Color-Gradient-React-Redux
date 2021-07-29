import { connect } from 'react-redux';

import Colors from 'src/components/Colors';

const mapStateToProps = (state) => ({
  // on indique que l'on souhaite donner pour valeur
  // à la prop firstColor de notre composant Colors
  // la valeur de la propriété firstColor du state
  firstColor: state.firstColor,
  lastColor: state.lastColor,
});

export default connect(mapStateToProps)(Colors);
