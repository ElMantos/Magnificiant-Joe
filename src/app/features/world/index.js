import React from 'react';

import config from 'Config';
import Player from '../player';
import Map from '../map';

function World() {
  console.log(config);
  return (
    <div
      style={{
        width: `${config.constants.MAP_WIDTH}px`,
        height: `${config.constants.MAP_HEIGHT}px`,
        position: 'relative',
        margin: '10px auto'
      }}
    >
      <Map />
      <Player />
    </div>
  );
}

export default World;
