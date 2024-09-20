import { c as create_ssr_component, v as validate_component, h as add_attribute } from "../../../chunks/ssr.js";
import { M as MainFrame } from "../../../chunks/MainFrame.js";
const lighttigerxivPFP = "/website/_app/immutable/assets/lighttigerxiv.BMKRU4u0.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainFrame, "MainFrame").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="text-6xl font-medium" data-svelte-h="svelte-1nto3fj">Team</h1> <p class="text-text-two text-lg mt-2" data-svelte-h="svelte-nh7axi">For now the team is only one person 😅</p> <h2 class="text-4xl mt-4 font-medium" data-svelte-h="svelte-jndq7v">Core</h2> <div class="flex items-center justify-center bg-neutral-four p-4 mt-2 rounded-2xl"><button data-svelte-h="svelte-1f89zz7"><img${add_attribute("src", lighttigerxivPFP, 0)} alt="" class="h-40 rounded-full"> <p class="text-2xl font-medium mt-2">lighttigerXIV</p></button></div>`;
    }
  })}`;
});
export {
  Page as default
};
