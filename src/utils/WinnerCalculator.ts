import type {Game, Player} from '../types/Game';

const topRow = (game: Game): Player | null => {
    if (game.topLeft !== '' && game.topLeft === game.topCenter && game.topCenter == game.topRight) {
        return game.topLeft;
    }
    return null;
};

export const calculateWinner = (game: Game): Player | null => {
    return topRow(game);
};