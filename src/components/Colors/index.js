import React from 'react';
import PropTypes from 'prop-types';

const Colors = ({ firstColor, lastColor }) => (
  <div id="colors">
    <span style={{ color: firstColor }}>{firstColor}</span>
    -
    <span style={{ color: lastColor }}>{lastColor}</span>
  </div>
);

Colors.propTypes = {
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default Colors;
