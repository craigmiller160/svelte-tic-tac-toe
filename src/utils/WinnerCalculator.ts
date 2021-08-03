import type { Game, Player } from '../types/Game';

export type WinnerResult = Player | null;

const topRow = (game: Game): WinnerResult => {
	if (
		game.topLeft !== '' &&
		game.topLeft === game.topCenter &&
		game.topCenter == game.topRight
	) {
		return game.topLeft;
	}
	return null;
};

const middleRow = (game: Game): WinnerResult => {
	if (
		game.middleLeft !== '' &&
		game.middleLeft === game.middleCenter &&
		game.middleCenter == game.middleRight
	) {
		return game.middleLeft;
	}
	return null;
};

const bottomRow = (game: Game): WinnerResult => {
	if (
		game.bottomLeft !== '' &&
		game.bottomLeft === game.bottomCenter &&
		game.bottomCenter == game.bottomRight
	) {
		return game.bottomLeft;
	}
	return null;
};

const leftColumn = (game: Game): WinnerResult => {
	if (
		game.topLeft != '' &&
		game.topLeft === game.middleLeft &&
		game.middleLeft == game.bottomLeft
	) {
		return game.topLeft;
	}
	return null;
};

const centerColumn = (game: Game): WinnerResult => {
	if (
		game.topCenter !== '' &&
		game.topCenter === game.middleCenter &&
		game.middleCenter == game.bottomCenter
	) {
		return game.topCenter;
	}
	return null;
};

const rightColumn = (game: Game): WinnerResult => {
	if (
		game.topRight !== '' &&
		game.topRight === game.middleRight &&
		game.middleRight == game.bottomRight
	) {
		return game.topRight;
	}
	return null;
};

const diagonalTopLeftBottomRight = (game: Game): WinnerResult => {
	if (
		game.topLeft !== '' &&
		game.topLeft === game.middleCenter &&
		game.middleCenter === game.bottomRight
	) {
		return game.topLeft;
	}
	return null;
};

const diagonalBottomLeftTopRight = (game: Game): WinnerResult => {
	if (
		game.bottomLeft !== '' &&
		game.bottomLeft === game.middleCenter &&
		game.middleCenter === game.topRight
	) {
		return game.bottomLeft;
	}
	return null;
};

export const calculateWinner = (game: Game): WinnerResult => {
	return (
		topRow(game) ??
		middleRow(game) ??
		bottomRow(game) ??
		leftColumn(game) ??
		centerColumn(game) ??
		rightColumn(game) ??
		diagonalTopLeftBottomRight(game) ??
		diagonalBottomLeftTopRight(game)
	);
};
