<script lang="ts">
    import Square from "./Square.svelte";
    import {game} from "../stores";
    import type {Game} from '../types/Game';
    import {blankGame} from '../utils/GameConstants';
    import Button from "./ui/Button.svelte";

    let isClearMode: boolean = false;
    game.subscribe((gameValue: Game) => {
        isClearMode = gameValue.isClearMode;
    });

    const newGame = () =>
        game.update((existingGame: Game) => blankGame);

    const toggleClearMode = () =>
        game.update((existingGame: Game) => ({
            ...existingGame,
            isClearMode: !existingGame.isClearMode
        }));
</script>

<style lang="scss">
    .board {
      display: flex;
      flex-direction: column;

      .row {
        display: flex;
        flex-direction: row;
      }

      .actions {
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }

      button {
        border-radius: 5px;
        background-color: lightblue;
        cursor: pointer;

        &.active {
          background-color: lightgreen;
        }
      }
    }
</style>

<div class="board">
    <div class="row">
        <Square gameKey="topLeft" />
        <Square gameKey="topCenter" />
        <Square gameKey="topRight" />
    </div>
    <div class="row">
        <Square gameKey="middleLeft" />
        <Square gameKey="middleCenter" />
        <Square gameKey="middleRight" />
    </div>
    <div class="row">
        <Square gameKey="bottomLeft" />
        <Square gameKey="bottomCenter" />
        <Square gameKey="bottomRight" />
    </div>
    <div class="actions">
        <Button
                onClick={toggleClearMode}
                label="Clear Squares"
                active={isClearMode}
        />
        <Button
                onClick={newGame}
                label="New Game"
        />
    </div>
</div>