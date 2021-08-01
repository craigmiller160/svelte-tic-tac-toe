<script lang="ts">
    import Board from "./components/Board.svelte";
</script>

<main>
    <h1>Tic Tac Toe</h1>
    <Board />
</main>

<style lang="scss">
    body {
      margin: 0;
      padding: 0;
    }

    main {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 3rem;
      }
    }
</style>