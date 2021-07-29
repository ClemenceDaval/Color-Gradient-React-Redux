import React from 'react';
import PropTypes from 'prop-types';

const ColorButtons = ({ randomFirstColor, randomAllColor, randomLastColor }) => (
  <div className="buttons group">
    <button type="button" className="button" id="randFirst" onClick={randomFirstColor}>Random First</button>
    <button type="button" className="button" id="randAll" onClick={randomAllColor}>Random All</button>
    <button type="button" className="button" id="randLast" onClick={randomLastColor}>Random Last</button>
  </div>
);

ColorButtons.propTypes = {
  randomFirstColor: PropTypes.func.isRequired,
  randomAllColor: PropTypes.func.isRequired,
  randomLastColor: PropTypes.func.isRequired,
};

export default ColorButtons;
