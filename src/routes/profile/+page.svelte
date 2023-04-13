<script>
  import PageWrapper from '$lib/components/PageWrapper.svelte'

  export let data = null
</script>

<svelte:head>
  <title>Profile | RISD Hackathon</title>
</svelte:head>

<PageWrapper>
  <div class="max-w-md m-auto space-y-24">
    <div class="grid gap-6 grow-0 shrink-0 grid-cols-2">
      <div class="col-span-2 overflow-hidden">
        <img
          style="image-rendering: pixelated; -webkit-image-rendering: pixelated; -moz-image-rendering: pixelated;"
          class="w-full rounded-xl"
          src={data.qrCode}
          alt="User identification QR code"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <div class="flex grow-0 shrink-0 text-zinc-400">
          <span class="grow-0 shrink-0 pb-1 border-b border-solid border-zinc-500 text-lg"
            >First Name</span
          >
        </div>
        <div class="grow-0 shrink-0 overflow-hidden text-ellipsis text-xl">
          {data.user.firstName}
        </div>
      </div>
      <div class="flex flex-col space-y-1">
        <div class="flex grow-0 shrink-0 text-zinc-400">
          <span class="grow-0 shrink-0 pb-1 border-b border-solid border-zinc-500 text-lg ml-auto"
            >Last Name</span
          >
        </div>
        <div class="grow-0 shrink-0 overflow-hidden text-ellipsis text-xl ml-auto">
          {data.user.lastName}
        </div>
      </div>
      <div class="col-span-2 flex flex-col space-y-1">
        <div class="flex grow-0 shrink-0 text-zinc-400">
          <span class="grow-0 shrink-0 pb-1 border-b border-solid border-zinc-500 text-lg"
            >Email Address</span
          >
        </div>
        <div class="grow-0 shrink-0 overflow-hidden text-ellipsis text-xl">
          {data.user.username}
        </div>
      </div>
    </div>
    <div class="space-y-8">
      {#if data.user.isAdmin}
        <a
          class="flex flex-row justify-center p-8 rounded-xl bg-green-700 text-green-100 text-2xl pixel"
          href="/scan"
        >
          <div>Scan</div>
        </a>
      {/if}
      <a
        class="flex flex-row justify-center p-8 rounded-xl bg-red-800 text-red-200 text-2xl pixel"
        href="/sign-out"
      >
        <div>Sign Out</div>
      </a>
    </div>
  </div>
</PageWrapper>
