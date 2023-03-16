<script lang="ts">
    import Tetris from "tetris-ts";
    import { onMount } from "svelte";

    let element: HTMLElement;

    onMount(() => {
        const _tetris = new Tetris(element, () => {});
    });
</script>

<div bind:this={element} id="tetris" />

<style>
    #tetris {
        width: 400px;
    }
</style>
