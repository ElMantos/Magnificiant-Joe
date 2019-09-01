import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { player } from 'State';
import items from './items';
import Itempanel from './Itempanel';

function InventoryTab({ playerItems, addPlayerItem }) {
  useEffect(() => {
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
    addPlayerItem(items.weapons.basicSword);
  }, [addPlayerItem]);
  return (
    <div className="inventory-tab">
      {playerItems.map(item => {
        return <Itempanel item={item} />;
      })}
    </div>
  );
}

InventoryTab.propTypes = {
  playerItems: PropTypes.arrayOf(PropTypes.any).isRequired
};

const enhance = connect(
  state => ({
    playerItems: player.selectors.getPlayerItems(state)
  }),
  dispatch => ({
    addPlayerItem: item => dispatch(player.actions.addPlayerItem(item))
  })
);

export default enhance(InventoryTab);
