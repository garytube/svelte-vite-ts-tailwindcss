<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button
  on:click={increment}
  type="button"
  class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-svelte hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-svelte"
>
  {count}
</button>
