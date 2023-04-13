<script>
  import BackgroundWrapper from '$lib/components/BackgroundWrapper.svelte'
</script>

<BackgroundWrapper url="/bg-top.png">
  <div
    class="w-full flex flex-col grow-0 shrink-0 items-center justify-center space-y-8"
    style="padding-top: min(10vw, 96px); padding-bottom: min(20vw, 192px);"
  >
    <img
      class="w-2/3 h-auto flex-row"
      src="logo.png"
      style="image-rendering: pixelated; -webkit-image-rendering: pixelated; -moz-image-rendering: pixelated; animation: 1s ease-in-out infinite alternate hero-hover;"
      alt="logo"
    />
    <div class="flex-row pixel text-5xl" style="font-size: min(6vw, 64px)">RISD Hackathon</div>
  </div>
</BackgroundWrapper>
