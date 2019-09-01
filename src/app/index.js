import React, { PureComponent } from 'react';

import { World, PlayerItems, InventoryTab } from './features';

import './style.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <span className="flex flex-col">
          <World />
          <div className="flex mx-8 px-10 bg-gray-800 border-4 border-gray-600">
            <PlayerItems />
            <InventoryTab />
          </div>
        </span>
      </div>
    );
  }
}

export default App;
