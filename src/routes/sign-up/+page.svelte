<script>
  import { fetchOk } from '$lib/fetch.js'
  import { COUNTRY_NAMES } from '$lib/json/countries.json'
  import { SCHOOL_NAMES } from '$lib/json/schools.json'

  let username = '',
    password = '',
    firstName = '',
    lastName = '',
    phoneNumber = '',
    age = 'Prefer not to answer',
    country = 'Prefer not to answer',
    school = 'Prefer not to answer',
    currentLevelOfStudy = 'Prefer not to answer'

  let submitEnabled = true

  async function handleSubmit(event) {
    if (
      !username ||
      !password ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !age ||
      !country ||
      !school ||
      !currentLevelOfStudy
    ) {
      window.alert('Please fill out all fields.')
      return
    }

    const PHONE_REGEX = /^[\d\.\+\-\(\)\s]+$/
    if (phoneNumber.length < 10 || !PHONE_REGEX.test(phoneNumber)) {
      window.alert('Invalid phone number. Please include at least 10 digits.')
      return
    }

    submitEnabled = false

    event.preventDefault()

    try {
      await fetchOk('/api/sign-up', {
        method: 'POST',
        body: {
          username,
          password,
          firstName,
          lastName,
          phoneNumber,
          age,
          country,
          school,
          currentLevelOfStudy,
        },
      })
    } catch (error) {
      console.error(error)
      window.alert(
        'Unable to create an account. Please make sure that you have filled out all fields and are connected to the internet. Password must contain at least 8 characters.'
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

    window.location.pathname = '/profile'
  }
</script>

<svelte:head>
  <title>Sign Up | RISD Hackathon</title>
</svelte:head>

<div class="w-full h-full flex flex-col items-center justify-center">
  <div
    class="w-full max-w-[400px] bg-zinc-800 border-zinc-700 border border-solid rounded-md p-4 flex flex-col items-center justify-center"
  >
    <h1 class="text-xl font-bold mb-1">New account</h1>
    <h1 class="text-md font-light mb-4">RISD Hackathon</h1>
    <form class="w-full flex flex-col items-center justify-center mb-4" on:submit={handleSubmit}>
      <input
        class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
        placeholder="Email Address"
        type="email"
        autocomplete="off"
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
        class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
        placeholder="First Name"
        autocomplete="off"
        required
        bind:value={firstName}
      />
      <input
        class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
        placeholder="Last Name"
        autocomplete="off"
        required
        bind:value={lastName}
      />
      <input
        class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
        placeholder="Telephone Number"
        autocomplete="off"
        type="tel"
        required
        bind:value={phoneNumber}
      />
      <div class="flex flex-col w-full min-w-0">
        <div class="pl-2 text-zinc-300">Age</div>
        <select
          class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
          placeholder="Age"
          autocomplete="off"
          required
          bind:value={age}
        >
          <option>Prefer not to answer</option>
          {#each new Array(87) as _, i}
            <option>{i + 13}</option>
          {/each}
        </select>
      </div>
      <div class="flex flex-col w-full min-w-0">
        <div class="pl-2 text-zinc-300">Country of residence</div>
        <select
          class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
          placeholder="Country"
          autocomplete="off"
          required
          bind:value={country}
        >
          <option>Prefer not to answer</option>
          {#each COUNTRY_NAMES as country}
            <option>{country}</option>
          {/each}
        </select>
      </div>
      <div class="flex flex-col w-full min-w-0">
        <div class="pl-2 text-zinc-300">School</div>
        <select
          class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
          placeholder="School"
          autocomplete="off"
          required
          bind:value={school}
        >
          <option>Prefer not to answer</option>
          {#each SCHOOL_NAMES as school}
            <option>{school}</option>
          {/each}
        </select>
      </div>
      <div class="flex flex-col w-full min-w-0">
        <div class="pl-2 text-zinc-300">Level of study</div>
        <select
          class="w-full min-w-0 bg-zinc-900 text-inherit border-zinc-700 border border-solid rounded-md p-2 mb-2"
          placeholder="Current Level of Study"
          autocomplete="off"
          required
          bind:value={currentLevelOfStudy}
        >
          <option>Prefer not to answer</option>
          {#each ['Less than Secondary / High School', 'Secondary / High School', 'Undergraduate University (2 year - community college or similar)', 'Undergraduate University (3+ year)', 'Graduate University (Masters, Professional, Doctoral, etc)', 'Code School / Bootcamp', 'Other Vocational / Trade Program or Apprenticeship', 'Other', "I'm not currently a student"] as levelOfStudy}
            <option>{levelOfStudy}</option>
          {/each}
        </select>
      </div>
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
