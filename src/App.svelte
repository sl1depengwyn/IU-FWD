<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import linkedinLogo from "./assets/linkedin.svg";
  import githubLogo from "./assets/github.svg";
  import Xkcd from "./lib/Xkcd.svelte";
  import Tetris from "./lib/Tetris.svelte";
  import About from "./lib/About.svelte";
</script>

<header>
  <h1>Maxim Filonov personal website</h1>
  <nav />
</header>
<main>
  <h1>Hello world!</h1>
  <About />

  <Tetris />

  <Xkcd email={"m.filonov@innopolis.university"} />
</main>

<footer>
  <div class="contacts">
    <h2>Contact me</h2>
    <p>
      <a id="email" href="mailto:max.pengwyn@gmail.com">max.pengwyn@gmail.com</a
      >
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
  main {
    flex: 1;
    min-width: 900px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  header {
    min-height: 50px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    padding: 10px 50px;
    text-align: left;
  }

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
