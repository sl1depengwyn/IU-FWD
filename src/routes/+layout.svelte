<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div id="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}

	main {
		flex: 1;
		min-width: 900px;
		margin: auto;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 30px;
	}
</style>
