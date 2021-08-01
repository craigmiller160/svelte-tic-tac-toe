export interface Game {
    topLeft: string;
    topCenter: string;
    topRight: string;
    middleLeft: string;
    middleCenter: string;
    middleRight: string;
    bottomLeft: string;
    bottomCenter: string;
    bottomRight: string;
}

export type GameKey = 'topLeft' | 'topCenter' | 'topRight' |
    'middleLeft' | 'middleCenter' | 'middleRight' |
    'bottomLeft' | 'bottomCenter' | 'bottomRight';