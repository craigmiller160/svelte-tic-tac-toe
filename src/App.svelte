<script lang="ts">
    import Board from "./components/Board.svelte";
    import Stats from "./components/Stats.svelte";
</script>

<main>
    <h1>Tic Tac Toe</h1>
    <div class="content">
        <Board />
        <div class="spacer"></div>
        <Stats />
    </div>
</main>

<style lang="scss">
    main {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 3rem;
      }

      .content {
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .spacer {
          margin: 0 10rem;
        }
      }
    }
</style>