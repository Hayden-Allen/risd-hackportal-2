<script>
  import BackgroundWrapper from '$lib/components/BackgroundWrapper.svelte'

  const achievements = [
    {
      title: 'Advanced Allocator',
      desc: 'Place first in the advanced division.',
      url: '/crystal-green.png',
      pt: 28 * 4,
    },
    {
      title: 'Novice NVMe',
      desc: 'Place first in the novice division.',
      url: '/crystal-blue.png',
      pt: 22 * 4,
    },
    {
      title: 'Design Diskette',
      desc: 'Build the most well-designed project.',
      url: '/crystal-red.png',
      pt: 22 * 4,
    },
    {
      title: "People's Choice Phlashdrive",
      desc: 'Win over the hearts of your peers.',
      url: '/crystal-purple.png',
      pt: 28 * 4,
    },
  ]
</script>

<BackgroundWrapper url="/bg-mid.png">
  <div class="flex flex-col space-y-8 px-4 pt-12 pb-24">
    <div style="font-size: min(6vw, 48px)" class="flex-row pixel text-4xl">Achievements</div>
    <div class="grid grid-cols-1 max-w-md m-auto md:grid-cols-2 md:max-w-full gap-x-16">
      {#each achievements as achievement}
        <div
          style="background-image: url({achievement.url}); background-size: contain;background-repeat: no-repeat; background-position: center; padding-top: {achievement.pt}px;"
          class="flex flex-col space-y-1 px-16 pb-24 items-center"
        >
          <div
            style="text-shadow: 0 0 1px #000, 0 0 2px #000, 0 0 4px #000;"
            class="text-md md:text-lg lg:text-xl font-bold"
          >
            {achievement.title}
          </div>
          <div
            style="text-shadow: 0 0 1px #000, 0 0 2px #000, 0 0 4px #000;"
            class="text-xs md:text-md text-center"
          >
            {achievement.desc}
          </div>
        </div>
      {/each}
    </div>
  </div>
</BackgroundWrapper>
