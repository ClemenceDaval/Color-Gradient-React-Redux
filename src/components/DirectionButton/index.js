import React from 'react';
import PropTypes from 'prop-types';

const DirectionButton = ({ direction, isActive, manageClick }) => (
  <button type="button" className={`button ${isActive ? 'button--active' : ''}`} onClick={manageClick}>{direction}</button>
);

DirectionButton.propTypes = {
  direction: PropTypes.string.isRequired,
  manageClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default DirectionButton;
