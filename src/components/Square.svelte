
<script lang="ts">
    export let borderRight: boolean = false;
    export let borderLeft: boolean = false;
    export let borderTop: boolean = false;
    export let borderBottom: boolean = false

    let showMark: boolean = false

    const onSquareClick = () => {
        showMark = !showMark;
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
  }

  .borderRight {
    border-right: 1px solid black;
  }

  .borderLeft {
    border-left: 1px solid black;
  }

  .borderTop {
    border-top: 1px solid black;
  }

  .borderBottom {
    border-bottom: 1px solid black;
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
    {#if showMark}
    <span>X</span>
    {/if}
</div>