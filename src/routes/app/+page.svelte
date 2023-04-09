<script>
  export let data = null
</script>

<svelte:head>
  <title>App | @iffyloop/sveltekit-starter</title>
</svelte:head>

<h1 class="text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Welcome! You are signed in as &quot;{data.user.username}&quot;
</h1>
