<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let text: String;

  let dispatch = createEventDispatcher();
</script>

<button
  class="flex justify-center p-4 bg-neutral-four rounded-2xl items-center hover:bg-neutral-six focus:bg-neutral-six"
  on:click={() => dispatch("click")}
>
  <slot></slot>
  <p class="ml-4 text-lg">{text}</p>
</button>
