import { store, player } from 'State';

const handleMovement = playerComponent => {
  const handleKeyDown = event => {
    event.preventDefault();

    switch (event.keyCode) {
      case 40:
        return store.dispatch(player.actions.directionMove('SOUTH'));
      case 39:
        return store.dispatch(player.actions.directionMove('EAST'));
      case 38:
        return store.dispatch(player.actions.directionMove('NORTH'));
      case 37:
        return store.dispatch(player.actions.directionMove('WEST'));
      default:
        return console.log(event.keyCode);
    }
  };
  window.addEventListener('keydown', event => {
    handleKeyDown(event);
  });

  return playerComponent;
};

export default handleMovement;
