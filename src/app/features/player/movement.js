import { store, player } from 'State';
import config from 'Config';

const handleMovement = playerComponent => {
  const induceMovement = direction => {
    const oldPos = player.selectors.getPlayerPosition(store.getState());
    store.dispatch(
      player.actions.directionMove(
        config.utils.observeMovementBoundaries(
          oldPos,
          config.utils.getNewPosition(direction, oldPos)
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
        return console.warn(`Key ${event.keyCode} is not binded`);
    }
  };
  window.addEventListener('keydown', event => {
    handleKeyDown(event);
  });

  return playerComponent;
};

export default handleMovement;
