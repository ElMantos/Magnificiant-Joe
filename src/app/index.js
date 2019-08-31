import React, { PureComponent } from 'react';

import { Player } from './features';

class App extends PureComponent {
  render() {
    return (
      <div>
        <span>
          <Player />
        </span>
      </div>
    );
  }
}

export default App;
