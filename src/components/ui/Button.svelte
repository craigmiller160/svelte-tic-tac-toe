
<script lang="ts">
    export let onClick: () => void = () => {};
    export let label: string;
    export let active: boolean = false;
</script>

<style lang="scss">
    .button {
      border-radius: 5px;
      background-color: lightblue;
      cursor: pointer;

      &.active {
        background-color: lightgreen;
      }
    }
</style>

<button
        class="button"
        class:active
        on:click={onClick}
>
    {label}
</button>