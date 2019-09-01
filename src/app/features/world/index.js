import React from 'react';

import config from 'Config';
import Player from '../player';
import Map from '../map';
import { firstMap } from '../../data/maps';

function World() {
  return (
    <div
      style={{
        width: `${config.constants.MAP_WIDTH}px`,
        height: `${config.constants.MAP_HEIGHT}px`,
        position: 'relative',
        margin: '10px auto'
      }}
    >
      <Map map={firstMap.tiles} className={firstMap.mapClass} />
      <Player />
    </div>
  );
}

export default World;
