import React from 'react';

import './style.css';

function PlayerItem({ item }) {
  return <div className="player-item">{item}</div>;
}

function PlayerItems() {
  return (
    <div className="player-items">
      <PlayerItem item="Helmet" />
      <PlayerItem item="Armor" />
      <PlayerItem item="Pants" />
      <PlayerItem item="Boots" />
    </div>
  );
}

export default PlayerItems;
