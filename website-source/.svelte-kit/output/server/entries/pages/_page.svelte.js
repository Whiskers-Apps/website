import { c as create_ssr_component, d as createEventDispatcher, e as escape, f as spread, g as escape_object, v as validate_component } from "../../chunks/ssr.js";
import { M as MainFrame, P as Package, a as People } from "../../chunks/MainFrame.js";
import "../../chunks/client.js";
const HomeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  createEventDispatcher();
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  return `<button class="flex justify-center p-4 bg-neutral-four rounded-2xl items-center hover:bg-neutral-six focus:bg-neutral-six">${slots.default ? slots.default({}) : ``} <p class="ml-4 text-lg">${escape(text)}</p></button>`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path fill="currentColor" fill-rule="evenodd" d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.4 9.4 0 0 0 10 4.958a9.4 9.4 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"/></svg>`;
});
const Pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M4 12q0-3.264 1.6-6.016t4.384-4.352T16 0t6.016 1.632T26.4 5.984 28 12q0 1.376-.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.08L16 32q-.256-.256-.672-.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616T4 12m4 0q0 3.328 2.336 5.664T16 20t5.664-2.336T24 12t-2.336-5.632T16 4t-5.664 2.368T8 12"/></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainFrame, "MainFrame").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex-grow justify-center flex flex-col"><h1 class="text-6xl font-medium" data-svelte-h="svelte-14uffsi">Whiskers Apps</h1> <p class="text-text-three text-2xl mt-4" data-svelte-h="svelte-vuhxes">Apps/libraries to fix every day struggles. From Android apps to Rust libraries, we have all
      kinds of things ^-^</p> <div class="mt-4 gap-4 grid grid-cols-2 md:grid-cols-3 w-fit">${validate_component(HomeButton, "HomeButton").$$render($$result, { text: "Projects" }, {}, {
        default: () => {
          return `${validate_component(Package, "PackageIcon").$$render($$result, { class: "h-5 w-5" }, {}, {})}`;
        }
      })} ${validate_component(HomeButton, "HomeButton").$$render($$result, { text: "Team" }, {}, {
        default: () => {
          return `${validate_component(People, "PeopleIcon").$$render($$result, { class: "h-5 w-5" }, {}, {})}`;
        }
      })} ${validate_component(HomeButton, "HomeButton").$$render($$result, { text: "GitHub" }, {}, {
        default: () => {
          return `${validate_component(Github, "GitHubIcon").$$render($$result, { class: "h-5 w-5" }, {}, {})}`;
        }
      })}</div> <div class="bg-neutral-four rounded-full w-fit p-4 mt-4 flex items-center">${validate_component(Pin, "PinIcon").$$render($$result, { class: "h-5 w-5" }, {}, {})} <p class="ml-4 text-lg" data-svelte-h="svelte-10vohqw">Portugal</p></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
