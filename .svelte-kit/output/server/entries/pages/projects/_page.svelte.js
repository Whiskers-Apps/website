import { c as create_ssr_component, f as spread, g as escape_object, v as validate_component, h as add_attribute, i as each, e as escape } from "../../../chunks/ssr.js";
import { M as MainFrame } from "../../../chunks/MainFrame.js";
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "none" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.673 16.641 21 21m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/></svg>`;
});
const Glasses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path d="M30 14.75h-.876c-.595-2.872-3.104-5-6.11-5a6.24 6.24 0 0 0-6.012 4.58l-.01.044a5.406 5.406 0 0 0-2.017.005l.034-.005c-.735-2.684-3.152-4.624-6.022-4.624a6.236 6.236 0 0 0-6.103 4.959l-.007.04H2a1.25 1.25 0 0 0 0 2.5h.876c.595 2.872 3.105 5 6.111 5a6.24 6.24 0 0 0 6.169-5.327l.004-.034c.251-.081.54-.127.84-.127s.589.046.86.133l-.02-.006c.443 3.047 3.038 5.361 6.173 5.361a6.24 6.24 0 0 0 6.104-4.96l.007-.04H30a1.25 1.25 0 0 0 0-2.5zm-21 5A3.75 3.75 0 1 1 12.75 16 3.754 3.754 0 0 1 9 19.75m14 0A3.75 3.75 0 1 1 26.75 16 3.754 3.754 0 0 1 23 19.75"/></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displayProjects;
  let projects = [];
  let searchText = "";
  let errorMessage = "";
  displayProjects = projects;
  return `${validate_component(MainFrame, "MainFrame").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="text-6xl font-medium" data-svelte-h="svelte-c00obu">Projects</h1> <div class="bg-neutral-four pl-3 pr-3 mt-4 flex items-center rounded-full">${validate_component(Search, "SearchIcon").$$render($$result, { class: "h-5 w-5" }, {}, {})} <input class="flex-grow bg-neutral-four p-3 outline-none placeholder-text-three" placeholder="Search"${add_attribute("value", searchText, 0)}></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full">${each(displayProjects, (project) => {
        return `<button class="p-4 gap-2 rounded-2xl bg-neutral-four outline-none focus:bg-neutral-six hover:bg-neutral-six"><img${add_attribute("src", project.banner, 0)}${add_attribute("alt", `${project.name} banner`, 0)}> <div class="mt-4 gap-2 flex-wrap flex overflow-auto">${each(project.languages, (language) => {
          return `<div class="bg-neutral-six p-2 pl-4 pr-4 rounded-full">${escape(language.charAt(0).toUpperCase() + language.slice(1))} </div>`;
        })} ${each(project.platforms, (platform) => {
          return `<div class="bg-neutral-six p-2 pl-4 pr-4 rounded-full">${escape(platform.charAt(0).toUpperCase() + platform.slice(1))} </div>`;
        })}</div> ${project.repo === "https://github.com/Whiskers-Apps/claw-launcher" ? `<button class="flex bg-neutral-six p-2 pl-4 pr-4 items-center mt-2 rounded-full">${validate_component(Glasses, "GlassesIcon").$$render($$result, { class: "w-6 h-6 mr-2" }, {}, {})} <p data-svelte-h="svelte-1jaf2si">Read Privacy Policy</p> </button>` : ``} </button>`;
      })}</div> ${errorMessage.length > 0 ? `<div>Something went wrong. Reason: ${escape(errorMessage)}</div>` : ``}`;
    }
  })}`;
});
export {
  Page as default
};
