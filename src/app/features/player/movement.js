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
        )
      )
    );
  };

  const handleKeyDown = event => {
    event.preventDefault();

    switch (event.keyCode) {
      case 40:
        return induceMovement('SOUTH');
      case 39:
        return induceMovement('EAST');
      case 38:
        return induceMovement('NORTH');
      case 37:
        return induceMovement('WEST');
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
