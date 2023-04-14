<script>
  import UserCircleIcon from '$lib/components/icons/24/outline/UserCircle.svelte'
</script>

<div
  class="flex flex-row grow-0 shrink-0 bg-zinc-800 w-full h-[72px] border-b border-zinc-700 text-xl pixel"
>
  <a
    class="flex items-center justify-center grow shrink basis-0 hover:bg-zinc-700/50 transition-colors duration-200"
    href="/"
  >
    <div class="hidden xl:block">-</div>
    <div class="flex flex-row items-center space-x-2">
      <img class="w-12 h-12" src="/icon-menu.png" alt="M" />
      <div class="hidden xl:block">Menu</div>
    </div>
    <div class="hidden xl:block">-</div></a
  >
  <a
    class="flex items-center justify-center grow shrink basis-0 hover:bg-zinc-700/50 transition-colors duration-200"
    href="/schedule"
  >
    <div class="hidden xl:block">-</div>
    <div class="flex flex-row items-center space-x-2">
      <img class="w-12 h-12" src="/icon-quests.png" alt="Q" />
      <div class="hidden xl:block">Quests</div>
    </div>
    <div class="hidden xl:block">-</div></a
  >
  <a
    class="flex items-center justify-center grow shrink basis-0 hover:bg-zinc-700/50 transition-colors duration-200"
    href="/faq"
  >
    <div class="hidden xl:block">-</div>
    <div class="flex flex-row items-center space-x-2">
      <img class="w-12 h-12" src="/icon-guide.png" alt="G" />
      <div class="hidden xl:block">Guide</div>
    </div>
    <div class="hidden xl:block">-</div></a
  >
  <a
    class="flex items-center justify-center grow shrink basis-0 hover:bg-zinc-700/50 transition-colors duration-200"
    href="/profile"
  >
    <div class="hidden xl:block">-</div>
    <div class="flex flex-row items-center space-x-2">
      <img class="w-12 h-12" src="/icon-profile.png" alt="P" />
      <div class="hidden xl:block">Profile</div>
    </div>
    <div class="hidden xl:block">-</div></a
  >
</div>
