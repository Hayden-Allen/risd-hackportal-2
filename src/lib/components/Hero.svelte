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
    <a
      class="flex flex-row items-center space-x-4 m-16 p-4 lg:p-6 rounded-lg bg-green-600 text-lg pixel text-center hover:bg-green-500 transition-colors"
      href="sign-up"
    >
      <img class="w-12 h-12" src="/icon-avatar.png" alt="avatar" />
      <div class="leading-snug" style="font-size: min(3vw, 16px);">Create your character</div>
    </a>
  </div>
</BackgroundWrapper>
