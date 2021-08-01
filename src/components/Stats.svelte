
<script lang="ts">

    import {game} from '../stores';
    import type {Game} from '../types/Game';
    import Button from "./ui/Button.svelte";
    import {getNextTurn} from '../utils/GameConstants';

    let currentTurnValue: string;
    game.subscribe((gameValue: Game) => {
        currentTurnValue = gameValue.currentTurn;
    });

    const toggleCurrentTurn = () =>
        game.update((currentGame: Game) => {
            const nextTurn = getNextTurn(currentGame.currentTurn);
            return {
                ...currentGame,
                currentTurn: nextTurn
            };
        })

</script>

<style lang="scss">
  .stats {
    display: flex;
    flex-direction: column;
    align-items: center;

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        margin-right: 1rem;
      }
    }

    p {
      font-size: 1.17em;
    }
  }
</style>

<div class="stats">
    <h2>Stats</h2>
    <div class="row">
        <p>
            <strong>Current Turn: </strong>
            <span>{currentTurnValue}</span>
        </p>
        <Button onClick={toggleCurrentTurn} label="Toggle" />
    </div>
</div>