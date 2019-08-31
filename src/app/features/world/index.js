import React from 'react';

import Player from '../player';
import Map from '../map';

function World() {
  return (
    <div
      style={{
        width: '800px',
        height: '400px',
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
