<script>
  import BackgroundWrapper from '$lib/components/BackgroundWrapper.svelte'
</script>

<BackgroundWrapper url="/bg-top.png">
  <div class="flex flex-col space-y-8 px-4 pt-12 pb-24">
    <div style="font-size: min(6vw, 48px)" class="flex flex-row pixel text-4xl">Sponsors</div>
    <div class="flex flex-col items-center md:flex-row md:justify-evenly md:h-32">
      <img class="grow-0 shrink-0 w-32 h-32 md:w-auto md:h-full" src="risd.png" alt="risd" />
      <img class="grow-0 shrink-0 w-[107] md:h-full" src="raytheon.png" alt="raytheon" />
      <img class="grow-0 shrink-0 w-32 md:w-auto h-32 md:h-full" src="utd.png" alt="utd" />
    </div>
  </div>
</BackgroundWrapper>
