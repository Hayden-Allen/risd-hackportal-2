<script>
  export let url = null
</script>

<div
  style="background-image: url('{url}'); background-repeat: repeat-x; background-size: auto 100%;"
>
  <div class="max-w-4xl m-auto flex flex-col grow-0 shrink-0">
    <slot />
  </div>
</div>
