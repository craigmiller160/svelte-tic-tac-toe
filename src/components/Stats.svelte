
<script lang="ts">

    import {game} from '../stores';
    import type {Game} from '../types/Game';

    let currentTurnValue: string;
    game.subscribe((gameValue: Game) => {
        currentTurnValue = gameValue.currentTurn;
    });

</script>

<style lang="scss">
  .stats {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1.17em;
    }
  }
</style>

<div class="stats">
    <h2>Stats</h2>
    <p>
        <strong>Current Turn: </strong>
        <span>{currentTurnValue}</span>
    </p>
</div>