<script>
  import Header from '$lib/components/Header.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Achievements from '$lib/components/Achievements.svelte'
  import Sponsors from '$lib/components/Sponsors.svelte'
</script>

<svelte:head>
  <title>Menu | RISD Hackathon</title>
</svelte:head>

<div class="w-full min-h-full flex flex-col overflow-hidden">
  <Header />
  <Hero />
  <Achievements />
  <Sponsors />
</div>
