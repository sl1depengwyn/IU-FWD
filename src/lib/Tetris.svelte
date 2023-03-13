<script lang="ts">
    import Tetris from "tetris-ts";
    import { onMount } from "svelte";

    onMount(() => {
        const tetris = new Tetris(document.getElementById("tetris"), () => {});
    });
</script>

<div id="tetris"/>

<style>
    #tetris {
        width: 320px;
    }
</style>