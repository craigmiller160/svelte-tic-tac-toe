export interface Game {
    currentTurn: Player;
    isClearMode: boolean;
    topLeft: Score;
    topCenter: Score;
    topRight: Score;
    middleLeft: Score;
    middleCenter: Score;
    middleRight: Score;
    bottomLeft: Score;
    bottomCenter: Score;
    bottomRight: Score;
}

export type Player = 'X' | 'O';
export type Score = Player | '';

export type GameKey = 'topLeft' | 'topCenter' | 'topRight' |
    'middleLeft' | 'middleCenter' | 'middleRight' |
    'bottomLeft' | 'bottomCenter' | 'bottomRight';