import { store, player, world } from 'State';
import config from 'Config';

const handleAction = () => {
  const state = store.getState();
  const position = player.selectors.getPlayerPosition(state);
  const tiles = world.selectors.getTiles(state);
  const collectable = config.utils.observeCollectable(position, tiles);
  if (collectable) {
    store.dispatch(world.actions.changeChestState(collectable.index));
  }
};

export default handleAction;
