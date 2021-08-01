import type {Player} from '../types/Game';

export const X_PLAYER: Player = 'X';
export const O_PLAYER: Player = 'O';

export const getNextTurn = (currentTurn: string): Player => {
    if (currentTurn === X_PLAYER) {
        return O_PLAYER;
    }
    return X_PLAYER;
}