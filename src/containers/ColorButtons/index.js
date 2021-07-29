import { connect } from 'react-redux';
import ColorButtons from 'src/components/ColorButtons';
import { randomHexColor } from 'src/utils';
import { changeFirstColor, changeLastColor } from 'src/actions';

// mapDispatchToProps permet de définir
// les propriétés du composant à connecter
// qui doivent provoquer le dispatch d'action sur le store
const mapDispatchToProps = (dispatch) => ({
  randomFirstColor: () => {
    dispatch(changeFirstColor(randomHexColor()));
  },
  randomAllColor: () => {
    dispatch(changeFirstColor(randomHexColor()));
    dispatch(changeLastColor(randomHexColor()));
  },
  randomLastColor: () => {
    dispatch(changeLastColor(randomHexColor()));
  },
});

export default connect(null, mapDispatchToProps)(ColorButtons);
