<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLElement;
	export let width = '400px';

	onMount(async () => {
		const Tetris = await (await import('tetris-ts')).default;

		const _tetris = new Tetris(element, () => {});
	});
</script>

<div bind:this={element} id="tetris" style="--width:{width};" />

<style>
	#tetris {
		width: var(--width);
	}
</style>
