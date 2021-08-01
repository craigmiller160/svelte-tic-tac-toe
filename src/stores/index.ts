import { writable } from 'svelte/store';
import type {Game} from '../types/Game';
import {X_PLAYER} from '../utils/PlayerConstants';

export const game = writable<Game>({
    currentTurn: X_PLAYER,
    topLeft: '',
    topCenter: '',
    topRight: '',
    middleLeft: '',
    middleCenter: '',
    middleRight: '',
    bottomLeft: '',
    bottomCenter: '',
    bottomRight: ''
})