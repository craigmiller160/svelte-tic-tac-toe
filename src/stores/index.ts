import {writable} from 'svelte/store';
import type {Game} from '../types/Game';
import {blankGame} from '../utils/GameConstants';

export const game = writable<Game>(blankGame);