<script>
  import BackgroundWrapper from '$lib/components/BackgroundWrapper.svelte'

  const achievements = [
    { title: 'Advanced Automaton', desc: 'Place first in the advanced division.' },
    { title: 'Novice Neural Network', desc: 'Place first in the novice division.' },
    { title: 'Design Destructron', desc: 'Build the most well-designed project.' },
    { title: "People's Choice PC", desc: 'Win over the hearts of your peers.' },
  ]
</script>

<BackgroundWrapper url="/bg-top.png">
  <div class="flex flex-col space-y-8 px-4 pt-12 pb-24">
    <div style="font-size: min(6vw, 48px)" class="flex-row pixel text-4xl">Achievements</div>
    <div class="grid grid-cols-1 max-w-md m-auto md:grid-cols-2 md:max-w-full gap-4">
      {#each achievements as achievement}
        <div class="flex flex-col bg-zinc-800 rounded-lg space-y-2 p-8 border border-zinc-700">
          <div class="text-2xl font-bold">{achievement.title}</div>
          <div class="text-m">{achievement.desc}</div>
        </div>
      {/each}
    </div>
  </div>
</BackgroundWrapper>
