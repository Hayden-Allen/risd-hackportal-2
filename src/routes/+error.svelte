<script>
  import { page } from '$app/stores'
</script>

<video src="/404.mp4" class="w-full h-full" autoplay loop playsinline />
<div
  style="background: rgba(0, 0, 0, 0.7)"
  class="text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg"
>
  Error {$page.status}. You&apos;ve hit a roadblock!
  <a href="/" class="text-emerald-500 hover:underline">Put it in reverse.</a>
</div>
