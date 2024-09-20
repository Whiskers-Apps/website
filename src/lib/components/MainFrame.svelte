<script lang="ts">
  import { page } from "$app/stores";
  import HomeIcon from "$lib/icons/home.svg?component";
  import PackageIcon from "$lib/icons/package.svg?component";
  import TeamIcon from "$lib/icons/people.svg?component";
  import WhiskersAppsExtendedLogo from "$lib/icons/logo-extended.svg?component";
  import { goToRoute } from "../../utils";

  let currentTab = $page.url.pathname;

  function getActiveTabClasses(tab: string): string {
    if(currentTab.startsWith("/privacy-policies") && tab === "/projects"){
      return "bg-neutral-two";
    }
    if (currentTab != tab) return "";
    return "bg-neutral-two";
  }
</script>

<div class=" w-full bg-neutral-four h-screen overflow-auto text-text p-4 md:flex hidden">
  <div class="w-[200px] min-w-[200px] space-y-2 flex flex-col pb-4">
    <button
      class={`flex w-full  p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/")}`}
      on:click={() => goToRoute("/")}
    >
      <HomeIcon class="h-6 w-6" />
      <div class="ml-4">Home</div>
    </button>
    <button
      class={`flex w-full  p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/projects")}`}
      on:click={() => goToRoute("/projects")}
    >
      <PackageIcon class="h-6 w-6" />
      <div class="ml-4">Projects</div>
    </button>
    <button
      class={`flex w-full p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/team")}`}
      on:click={() => goToRoute("/team")}
    >
      <TeamIcon class="h-6 w-6" />
      <div class="ml-4">Team</div>
    </button>
    <div class="flex-grow"></div>
    <div class="p-2 bg-neutral-two rounded-lg">
      <WhiskersAppsExtendedLogo class="h-12 w-full" />
    </div>
  </div>
  <div
    class="flex-grow bg-neutral-two ml-4 rounded-xl border border-neutral-six p-16 flex flex-col overflow-auto"
  >
    <slot></slot>
  </div>
</div>

<div class="flex flex-col md:hidden bg-neutral-two h-screen overflow-auto text-text">
  <div class="flex-grow p-4 overflow-auto">
    <slot></slot>
  </div>
  <div class="flex bg-neutral-four p-2">
    <button
      class={`flex flex-col items-center w-full  p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/")}`}
      on:click={() => goToRoute("/")}
    >
      <HomeIcon class="h-6 w-6" />
      <div class="text-xs">Home</div>
    </button>
    <button
      class={`flex flex-col items-center w-full  p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/projects")}`}
      on:click={() => goToRoute("/projects")}
    >
      <PackageIcon class="h-6 w-6" />
      <div >Projects</div>
    </button>
    <button
      class={`flex flex-col items-center w-full p-3  rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/team")}`}
      on:click={() => goToRoute("/team")}
    >
      <TeamIcon class="h-6 w-6" />
      <div class="text-xs">Team</div>
    </button>
  </div>
</div>
