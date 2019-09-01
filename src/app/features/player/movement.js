import { store, player, world } from 'State';
import config from 'Config';

const handleMovement = playerComponent => {
  const induceMovement = direction => {
    const state = store.getState();
    const oldPos = player.selectors.getPlayerPosition(state);
    const tiles = world.selectors.getTiles(state);
    store.dispatch(
      player.actions.directionMove(
        config.utils.observeMovementBoundaries(
          oldPos,
          config.utils.getNewPosition(direction, oldPos),
          tiles
        ),
        direction
      )
    );
  };

  const handleKeyDown = event => {
    event.preventDefault();

    switch (event.keyCode) {
      case 40:
        return induceMovement(player.constants.DIRECTIONS.south);
      case 39:
        return induceMovement(player.constants.DIRECTIONS.east);
      case 38:
        return induceMovement(player.constants.DIRECTIONS.north);
      case 37:
        return induceMovement(player.constants.DIRECTIONS.west);
      default:
        // eslint-disable-next-line no-console
        return console.warn(`Key ${event.keyCode} is not binded`);
    }
  };
  window.addEventListener('keydown', event => {
    handleKeyDown(event);
  });

  return playerComponent;
};

export default handleMovement;
