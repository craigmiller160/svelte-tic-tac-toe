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
        <Square borderBottom borderRight />
        <Square borderLeft borderBottom borderRight />
        <Square borderLeft borderBottom />
    </div>
    <div class="row">
        <Square borderTop borderBottom borderRight />
        <Square borderTop borderBottom borderRight borderLeft />
        <Square borderTop borderBottom borderLeft />
    </div>
    <div class="row">
        <Square borderTop borderRight />
        <Square borderTop borderRight borderLeft />
        <Square borderTop borderLeft />
    </div>
</div>