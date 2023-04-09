<script>
  import { onMount } from 'svelte'
  import { fetchOk } from '$lib/fetch.js'

  let status = null

  onMount(async () => {
    try {
      await fetchOk('/api/session', {
        method: 'DELETE',
      })
      status = 'done'
    } catch (error) {
      status = 'error'
      console.error(error)
    }

    setTimeout(() => {
      window.location.pathname = '/'
    }, 1000)
  })
</script>

<svelte:head>
  <title>Sign Out | @iffyloop/sveltekit-starter</title>
</svelte:head>

<h1 class="text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  {#if status === 'done'}
    Signed out!
  {:else if status === 'error'}
    Unable to sign out. Please refresh the page.
  {:else}
    Signing out...
  {/if}
</h1>
