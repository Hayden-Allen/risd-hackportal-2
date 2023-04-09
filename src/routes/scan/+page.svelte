<script>
  import { onMount } from 'svelte'
  import { fetchJson } from '$lib/fetch.js'
  import jsQR from 'jsqr'
  import PageWrapper from '$lib/components/PageWrapper.svelte'
  import CheckCircle from '$lib/components/icons/24/solid/CheckCircle.svelte'
  import XCircle from '$lib/components/icons/24/solid/XCircle.svelte'

  export let data = null

  const NUM_AVAILABLE_MEALS = 5

  let canvas = null
  let ctx = null
  let stream = null
  let videoEl = null
  let videoReady = false
  let apiStatus = null

  async function handleDecodedUserId({ data: scannedUserId }) {
    apiStatus = 'loading'

    try {
      const result = await fetchJson('/api/scan-qr', {
        method: 'POST',
        body: {
          scannedUserId,
        },
      })
      console.log(`${result.firstName} ${result.lastName} scanned ${result.numQrScans} times`)
      apiStatus = result.numQrScans <= NUM_AVAILABLE_MEALS
    } catch (error) {
      console.error(error)
      apiStatus = 'invalid-user'
    }
  }

  function animate() {
    window.requestAnimationFrame(animate)

    if (!videoReady || videoEl.paused || videoEl.ended) {
      return
    }

    ctx.drawImage(videoEl, 0, 0)
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const decoded = jsQR(imgData.data, imgData.width, imgData.height, {
      inversionAttempts: 'dontInvert',
    })
    if (decoded) {
      handleDecodedUserId(decoded)
      videoEl.pause()
    }
  }

  function startStream() {
    apiStatus = null
    videoReady = false
    videoEl.play()
    setTimeout(() => {
      videoReady = true
    }, 250)
  }

  onMount(async () => {
    ctx = canvas.getContext('2d', {
      willReadFrequently: true,
    })

    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      facingMode: 'environment',
    })

    videoEl = document.createElement('video')
    videoEl.srcObject = stream
    videoEl.addEventListener('loadedmetadata', () => {
      startStream()
      videoReady = true
      canvas.width = videoEl.videoWidth
      canvas.height = videoEl.videoHeight
    })

    window.requestAnimationFrame(animate)
  })
</script>

<svelte:head>
  <title>Scan (Admin) | RISD Hackathon</title>
</svelte:head>

<PageWrapper>
  <div class="flex flex-col space-y-6 grow-0 shrink-0 max-w-lg m-auto">
    <canvas bind:this={canvas} class="w-full h-auto rounded-lg bg-zinc-500" />
    {#if apiStatus === 'loading'}
      <div class="text-xl w-full text-center">Loading...</div>
    {:else if apiStatus !== null}
      {#if apiStatus === 'invalid-user'}
        <div class="text-xl w-full text-center">User not found.</div>
      {:else if apiStatus === true}
        <div class="m-auto w-[64px] h-[64px] text-emerald-500"><CheckCircle /></div>
      {:else if apiStatus === false}
        <div class="m-auto w-[64px] h-[64px] text-red-500"><XCircle /></div>
      {/if}
      <button
        class="bg-zinc-300 text-zinc-900 font-bold grow-0 shrink-0 w-[200px] p-4 text-lg rounded-lg m-auto"
        on:click={startStream}>Scan Another</button
      >
    {/if}
  </div>
</PageWrapper>
