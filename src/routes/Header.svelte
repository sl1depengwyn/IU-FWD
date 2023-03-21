<script lang="ts">
	import { page } from "$app/stores";
	import { base } from "$app/paths";
</script>

<header>
	<a href="/">
		<h1 class="title">Maxim Filonov personal website</h1>
	</a>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
				<a href="{base}/">About</a>
			</li>
			<li
				aria-current={$page.url.pathname === "/random-comic/"
					? "page"
					: undefined}
			>
				<a href="{base}/random-comic">Random comic</a>
			</li>
			<li
				aria-current={$page.url.pathname === "/tetris/"
					? "page"
					: undefined}
			>
				<a href="{base}/tetris">Tetris</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		min-height: 50px;
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		animation: gradient 15s ease infinite;
		background-size: 400% 400%;
		text-align: left;
	}

	.title {
		padding: 10px 50px;
		color: #213547;
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current="page"] {
		box-shadow: inset 0px -5px #213547;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
