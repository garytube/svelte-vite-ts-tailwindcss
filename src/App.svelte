<script lang="ts">
  import "./lib/Tailwindcss.svelte";
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
</script>

<main
  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-center flex-col items-center h-screen"
>
  <img src={logo} class="w-12" alt="Svelte Logo" />
  <h1 class="text-svelte text-4xl my-4">Hello Typescript + Tailwindcss!</h1>

  <Counter />
</main>
