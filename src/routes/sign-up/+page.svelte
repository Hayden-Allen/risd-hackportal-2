<script>
  import { fetchOk } from '$lib/fetch.js'

  let username = '',
    password = '',
    registrationKey = ''

  let submitEnabled = true

  async function handleSubmit(event) {
    submitEnabled = false

    event.preventDefault()

    try {
      await fetchOk('/api/sign-up', {
        method: 'POST',
        body: {
          username,
          password,
          registrationKey,
        },
      })
    } catch (error) {
      console.error(error)
      window.alert(
        'Unable to create an account. Please make sure that you are connected to the internet, or try a different username. Password must contain at least 8 characters.'
      )
      submitEnabled = true
      return
    }

    try {
      await fetchOk('/api/session', {
        method: 'POST',
        body: {
          username,
          password,
        },
      })
    } catch (error) {
      console.error(error)
    }

    window.location.pathname = '/app'
  }
</script>

<svelte:head>
  <title>Sign Up | @iffyloop/sveltekit-starter</title>
</svelte:head>

<div class="w-full h-full flex flex-col items-center justify-center">
  <div
    class="w-full max-w-[400px] bg-zinc-800 border-zinc-700 border border-solid rounded-md p-4 flex flex-col items-center justify-center"
  >
    <h1 class="text-xl font-bold mb-1">New account</h1>
    <h1 class="text-md font-light mb-4">@iffyloop/sveltekit-starter</h1>
    <form class="w-full flex flex-col items-center justify-center mb-4" on:submit={handleSubmit}>
      <input
        class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
        placeholder="Username"
        autocomplete="username"
        required
        bind:value={username}
      />
      <input
        class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
        placeholder="Password"
        type="password"
        autocomplete="new-password"
        required
        bind:value={password}
      />
      <input
        class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-4"
        placeholder="Registration Key"
        autocomplete="off"
        required
        bind:value={registrationKey}
      />
      <input
        class="font-bold px-4 py-2 bg-rose-500 disabled:bg-zinc-500 text-black rounded-md"
        type="submit"
        value="Create account"
        disabled={!submitEnabled}
      />
    </form>
    <div class="text-sm text-zinc-300">
      Already have an account? <a href="/sign-in" class="text-rose-500 underline">Sign in</a>
    </div>
  </div>
</div>
