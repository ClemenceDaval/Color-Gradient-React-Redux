import React from 'react';

import DirectionButton from 'src/containers/DirectionButton';

const DirectionButtons = () => (
  <div className="buttons group">
    <DirectionButton direction="90deg" />
    <DirectionButton direction="270deg" />
    <DirectionButton direction="0deg" />
    <DirectionButton direction="180deg" />
  </div>

);

export default DirectionButtons;
