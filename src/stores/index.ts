import { writable } from 'svelte/store';
import type {Game} from '../types/Game';

export const game = writable<Game>({
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