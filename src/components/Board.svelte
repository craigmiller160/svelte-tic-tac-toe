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
</div>