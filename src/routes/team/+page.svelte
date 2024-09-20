<script lang="ts">
  import MainFrame from "$lib/components/MainFrame.svelte";
  import lighttigerxivPFP from "$lib/images/lighttigerxiv.jpg";
  import { openLink } from "../../utils";
</script>

<MainFrame>
  <h1 class="text-6xl font-medium">Team</h1>
  <p class="text-text-two text-lg mt-2">For now the team is only one person 😅</p>
  <h2 class="text-4xl mt-4 font-medium">Core</h2>
  <div class="flex items-center justify-center bg-neutral-four p-4 mt-2 rounded-2xl">
    <button on:click={() => openLink("https://github.com/lighttigerXIV")}>
      <img src={lighttigerxivPFP} alt="" class="h-40 rounded-full">
      <p class="text-2xl font-medium mt-2">lighttigerXIV</p>
    </button>
  </div>
</MainFrame>
