<script>
  import Header from './Header.svelte'
</script>

<div class="w-full min-h-full flex flex-col overflow-hidden">
  <Header />
  <div class="grow-0 shrink-0 w-full p-12">
    <slot />
  </div>
</div>
