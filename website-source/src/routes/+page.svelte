<script lang="ts">
  import MainFrame from "$lib/components/MainFrame.svelte";
  import HomeButton from "$lib/components/HomeButton.svelte";
  import PackageIcon from "$lib/icons/package.svg?component";
  import PeopleIcon from "$lib/icons/people.svg?component";
  import GitHubIcon from "$lib/icons/github.svg?component";
  import PinIcon from "$lib/icons/pin.svg?component";
  import { goToRoute, openLink } from "../utils";
</script>

<MainFrame>
  <div class="flex-grow justify-center flex flex-col">
    <h1 class="text-6xl font-medium">Whiskers Apps</h1>
    <p class="text-text-three text-2xl mt-4">
      Apps/libraries to fix every day struggles. From Android apps to Rust libraries, we have all
      kinds of things ^-^
    </p>
    <div class="mt-4 gap-4 grid grid-cols-2 md:grid-cols-3 w-fit">
      <HomeButton text="Projects" on:click={() => goToRoute("/website/projects")}>
        <PackageIcon class="h-5 w-5" />
      </HomeButton>
      <HomeButton text="Team" on:click={() => goToRoute("/website/team")}>
        <PeopleIcon class="h-5 w-5" />
      </HomeButton>
      <HomeButton text="GitHub" on:click={() => openLink("https://github.com/Whiskers-Apps")}>
        <GitHubIcon class="h-5 w-5" />
      </HomeButton>
    </div>
    <div class="bg-neutral-four rounded-full w-fit p-4 mt-4 flex items-center">
      <PinIcon class="h-5 w-5" />
      <p class="ml-4 text-lg">Portugal</p>
    </div>
  </div>
</MainFrame>
