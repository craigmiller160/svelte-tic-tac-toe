<script>
    import Square from "./Square.svelte";
</script>

<style lang="scss">
    .board {
      display: flex;
      flex-direction: column;

      .row {
        display: flex;
        flex-direction: row;
      }
    }
</style>

<div class="board">
    <div class="row">
        <Square />
        <Square />
        <Square />
    </div>
    <div class="row">
        <Square />
        <Square />
        <Square />
    </div>
    <div class="row">
        <Square />
        <Square />
        <Square />
    </div>
</div>