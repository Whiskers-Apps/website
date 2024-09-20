<script lang="ts">
  import MainFrame from "$lib/components/MainFrame.svelte";
  import SearchIcon from "$lib/icons/search.svg?component";
  import { onMount } from "svelte";
  import { goToRoute, openLink } from "../../utils";
  import axios from "axios";
  import GlassesIcon from "$lib/icons/glasses.svg?component";

  interface Project {
    repo: string;
    name: string;
    banner: string;
    languages: string[];
    platforms: string[];
  }

  let projects: Project[] = [];
  $: displayProjects = projects;

  let searchText = "";
  let errorMessage = "";

  onMount(async () => {
    axios
      .get("https://raw.githubusercontent.com/Whiskers-Apps/projects/master/projects.json")
      .then((response) => {
        projects = response.data;
        displayProjects = response.data;
      })
      .catch((error) => {
        errorMessage = error;
        console.error(error);
      });
  });

  function search() {
    if (searchText.trim().length == 0) {
      displayProjects = projects;
      return;
    }

    displayProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
  }
</script>

<MainFrame>
  <h1 class="text-6xl font-medium">Projects</h1>
  <div class="bg-neutral-four pl-3 pr-3 mt-4 flex items-center rounded-full">
    <SearchIcon class="h-5 w-5" />
    <input
      class="flex-grow bg-neutral-four p-3 outline-none placeholder-text-three"
      placeholder="Search"
      bind:value={searchText}
      on:input={() => search()}
    />
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full">
    {#each displayProjects as project}
      <button
        class="p-4 gap-2 rounded-2xl bg-neutral-four outline-none focus:bg-neutral-six hover:bg-neutral-six"
        on:click={() => openLink(project.repo)}
      >
        <img src={project.banner} alt={`${project.name} banner`} />
        <div class="mt-4 gap-2 flex-wrap flex overflow-auto">
          {#each project.languages as language}
            <div class="bg-neutral-six p-2 pl-4 pr-4 rounded-full">
              {language.charAt(0).toUpperCase() + language.slice(1)}
            </div>
          {/each}
          {#each project.platforms as platform}
            <div class="bg-neutral-six p-2 pl-4 pr-4 rounded-full">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </div>
          {/each}
        </div>
        {#if project.repo === "https://github.com/Whiskers-Apps/claw-launcher"}
          <button
            class="flex bg-neutral-six p-2 pl-4 pr-4 items-center mt-2 rounded-full"
            on:click={(event) => {
              event.stopPropagation();
              goToRoute("/website/privacy-policies/claw-launcher");
            }}
          >
            <GlassesIcon class="w-6 h-6 mr-2" />
            <p>Read Privacy Policy</p>
          </button>
        {/if}
      </button>
    {/each}
  </div>
  {#if errorMessage.length > 0}
    <div>Something went wrong. Reason: {errorMessage}</div>
  {/if}
</MainFrame>
