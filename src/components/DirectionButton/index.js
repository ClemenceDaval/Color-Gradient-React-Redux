import React from 'react';
import PropTypes from 'prop-types';

const DirectionButton = ({ direction }) => (
  <button type="button" className="button">{direction}</button>
);

DirectionButton.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default DirectionButton;
