
<script lang="ts">
    import type {Game, GameKey} from '../types/Game';
    import {game} from '../stores';
    import {getNextTurn} from '../utils/PlayerConstants';

    export let gameKey: GameKey;

    let borderRight: boolean;
    let borderLeft: boolean;
    let borderTop: boolean;
    let borderBottom: boolean;

    $: borderRight = ['topLeft', 'topCenter', 'middleLeft', 'middleCenter', 'bottomLeft', 'bottomCenter'].includes(gameKey);
    $: borderLeft = ['topCenter', 'topRight', 'middleCenter', 'middleRight', 'bottomCenter', 'bottomRight'].includes(gameKey);
    $: borderTop = ['middleLeft', 'middleCenter', 'middleRight', 'bottomLeft', 'bottomCenter', 'bottomRight'].includes(gameKey);
    $: borderBottom = ['topLeft', 'topCenter', 'topRight', 'middleLeft', 'middleCenter', 'middleRight'].includes(gameKey);

    let squareValue: string = '';
    game.subscribe((gameValue: Game) => {
        squareValue = gameValue[gameKey]
    });

    let showSquareValue: boolean;
    $: showSquareValue = squareValue !== '';

    const onSquareClick = () => {

        game.update((existingGame: Game) => {
            const nextTurn = getNextTurn(existingGame.currentTurn);
            return {
                ...existingGame,
                currentTurn: nextTurn,
                [gameKey]: existingGame.currentTurn
            };
        });
    };
</script>

<style lang="scss">
  .square {
    width: 10rem;
    height: 10rem;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.borderRight {
      border-right: 1px solid black;
    }

    &.borderLeft {
      border-left: 1px solid black;
    }

    &.borderTop {
      border-top: 1px solid black;
    }

    &.borderBottom {
      border-bottom: 1px solid black;
    }

    span {
      cursor: pointer;
    }
  }
</style>

<div
        class="square"
        class:borderRight
        class:borderLeft
        class:borderTop
        class:borderBottom
        on:click={onSquareClick}
>
    {#if showSquareValue}
    <span>{squareValue}</span>
    {/if}
</div>