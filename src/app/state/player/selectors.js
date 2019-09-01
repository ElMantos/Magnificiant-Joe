import { PLAYER_NAME } from './constants';

export const getPlayerPosition = state => state[PLAYER_NAME].position;
export const getPlayerItems = state => state[PLAYER_NAME].items;
