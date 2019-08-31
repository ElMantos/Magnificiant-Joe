import React, { PureComponent } from 'react';

import { World } from './features';

import './style.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <span>
          <World />
        </span>
      </div>
    );
  }
}

export default App;
