<script lang="ts">
	import linkedinLogo from '$lib/images/linkedin.svg';
	import githubLogo from '$lib/images/github.svg';
</script>

<footer>
	<div class="contacts">
		<h2>Contact me</h2>
		<p>
			<a id="email" href="mailto:max.pengwyn@gmail.com">max.pengwyn@gmail.com</a>
		</p>
		<p><a id="tg-link" href="https://t.me/sl1depengwyn">@sl1depengwyn</a></p>
	</div>
	<div class="socials">
		<a id="gh-link" href="https://github.com/sl1depengwyn"
			><img alt="GitHub Logo" src={githubLogo} /></a
		>
		<a href="https://www.linkedin.com/in/sl1depengwyn/"
			><img alt="Linkedin Logo" src={linkedinLogo} /></a
		>
	</div>
</footer>

<style>
	footer {
		min-height: 50px;
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		animation: gradient 15s ease infinite;
		background-size: 400% 400%;
		padding: 10px 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: left;
	}

	.socials {
		text-align: center;
		vertical-align: bottom;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-end;
	}

	.socials a {
		padding: 5px;
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
