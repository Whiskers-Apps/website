import { c as create_ssr_component, f as spread, g as escape_object, b as subscribe, h as add_attribute, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill="currentColor" fill-rule="evenodd" d="M12.28 3.716a1 1 0 0 0-.56 0c-.052.015-.145.053-.341.202-.207.157-.46.38-.854.731l-5.24 4.657c-.642.571-.824.744-.95.934a2 2 0 0 0-.27.598c-.057.221-.065.472-.065 1.331V16c0 .946 0 1.605.036 2.12.034.508.099.803.192 1.028a3 3 0 0 0 1.624 1.624c.225.093.52.158 1.027.192C7.395 21 8.054 21 9 21h6c.945 0 1.605 0 2.12-.036.507-.034.803-.099 1.028-.192a3 3 0 0 0 1.624-1.624c.093-.225.158-.52.192-1.027C20 17.605 20 16.946 20 16v-3.831c0-.86-.008-1.11-.066-1.331a2 2 0 0 0-.268-.598c-.127-.19-.31-.363-.951-.934l-5.24-4.657c-.394-.35-.647-.574-.854-.73-.197-.15-.289-.188-.341-.203m-1.119-1.92a3 3 0 0 1 1.678 0c.38.11.695.305.99.528.276.21.588.487.947.806l5.267 4.682.084.074c.522.463.916.813 1.204 1.247a4 4 0 0 1 .537 1.196c.133.503.132 1.03.132 1.728v3.978c0 .902 0 1.63-.04 2.222-.042.608-.13 1.147-.34 1.656a5 5 0 0 1-2.707 2.706c-.51.212-1.048.3-1.656.34-.592.041-1.32.041-2.222.041h-6.07c-.902 0-1.63 0-2.222-.04-.608-.042-1.147-.13-1.656-.34a5 5 0 0 1-2.706-2.707c-.212-.51-.3-1.048-.34-1.656C2 17.665 2 16.937 2 16.035v-3.978c0-.698 0-1.225.132-1.728a4 4 0 0 1 .537-1.196c.288-.434.682-.784 1.204-1.247q.04-.037.084-.074L9.224 3.13c.359-.32.67-.597.948-.806.294-.223.609-.418.99-.528" clip-rule="evenodd"/></svg>`;
});
const Package = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="M20.929 1.628A1 1 0 0 0 20 1H4a1 1 0 0 0-.929.628l-2 5A1 1 0 0 0 1 7v15a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V7a1 1 0 0 0-.071-.372ZM4.677 3h14.646l1.2 3H3.477ZM3 21V8h18v13Zm8-3a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1"/></svg>`;
});
const People = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "currentColor" },
      { class: "bi bi-people" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>`;
});
const Logo_extended = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "740mm" },
      { height: "185mm" },
      { viewBox: "0 0 740 185" },
      escape_object($$props)
    ],
    {}
  )}><defs><path id="a" d="M910.441 93.795h2089.561v391.391H910.441z"/></defs><g transform="matrix(.34258 0 0 .34258 -.842 .612)"><path d="m52.092 170.916 31.706 54.917 31.706 54.916H-11.32l31.706-54.916z" style="fill:none;stroke:currentColor;stroke-width:15.923;stroke-linecap:round;stroke-linejoin:round" transform="translate(102.039 -67.547)"/><path d="m52.092 170.916 31.706 54.917 31.706 54.916H-11.32l31.706-54.916z" style="fill:none;stroke:currentColor;stroke-width:15.923;stroke-linecap:round;stroke-linejoin:round" transform="translate(304.756 143.076)"/><circle cx="349.934" cy="161.254" r="61.934" style="fill:none;stroke:currentColor;stroke-width:15.923;stroke-linecap:round;stroke-linejoin:round"/><circle cx="146.352" cy="368.208" r="61.934" style="fill:none;stroke:currentColor;stroke-width:15.923;stroke-linecap:round;stroke-linejoin:round"/></g><text xml:space="preserve" style="font-size:260px;font-family:&quot;RobotoMono Nerd Font&quot;;-inkscape-font-specification:&quot;RobotoMono Nerd Font&quot;;white-space:pre;shape-inside:url(#a);shape-padding:10.6478;fill:#491e00;stroke:#000;stroke-width:1.901;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers" transform="matrix(.29589 0 0 .29589 -82.819 18.36)"><tspan x="921.09" y="343.519"><tspan style="font-family:&quot;Noto Sans&quot;;-inkscape-font-specification:&quot;Noto Sans&quot;;fill:currentColor">Whiskers Apps</tspan></tspan></text></svg>`;
});
const MainFrame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentTab = $page.url.pathname;
  function getActiveTabClasses(tab) {
    if (currentTab.startsWith("/privacy-policies") && tab === "/projects") {
      return "bg-neutral-two";
    }
    if (currentTab != tab) return "";
    return "bg-neutral-two";
  }
  $$unsubscribe_page();
  return `<div class="w-full bg-neutral-four h-screen overflow-auto text-text p-4 md:flex hidden"><div class="w-[200px] min-w-[200px] space-y-2 flex flex-col pb-4"><button${add_attribute("class", `flex w-full  p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/")}`, 0)}>${validate_component(Home, "HomeIcon").$$render($$result, { class: "h-6 w-6" }, {}, {})} <div class="ml-4" data-svelte-h="svelte-1y52hpw">Home</div></button> <button${add_attribute("class", `flex w-full  p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/projects")}`, 0)}>${validate_component(Package, "PackageIcon").$$render($$result, { class: "h-6 w-6" }, {}, {})} <div class="ml-4" data-svelte-h="svelte-hejwix">Projects</div></button> <button${add_attribute("class", `flex w-full p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/team")}`, 0)}>${validate_component(People, "TeamIcon").$$render($$result, { class: "h-6 w-6" }, {}, {})} <div class="ml-4" data-svelte-h="svelte-1xn3quu">Team</div></button> <div class="flex-grow"></div> <div class="p-2 bg-neutral-two rounded-lg">${validate_component(Logo_extended, "WhiskersAppsExtendedLogo").$$render($$result, { class: "h-12 w-full" }, {}, {})}</div></div> <div class="flex-grow bg-neutral-two ml-4 rounded-xl border border-neutral-six p-16 flex flex-col overflow-auto">${slots.default ? slots.default({}) : ``}</div></div> <div class="flex flex-col md:hidden bg-neutral-two h-screen overflow-auto text-text"><div class="flex-grow p-4 overflow-auto">${slots.default ? slots.default({}) : ``}</div> <div class="flex bg-neutral-four p-2"><button${add_attribute("class", `flex flex-col items-center w-full  p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/")}`, 0)}>${validate_component(Home, "HomeIcon").$$render($$result, { class: "h-6 w-6" }, {}, {})} <div class="text-xs" data-svelte-h="svelte-hrelrd">Home</div></button> <button${add_attribute("class", `flex flex-col items-center w-full  p-3 pr-4 pl-4 rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/projects")}`, 0)}>${validate_component(Package, "PackageIcon").$$render($$result, { class: "h-6 w-6" }, {}, {})} <div data-svelte-h="svelte-1rxt3xs">Projects</div></button> <button${add_attribute("class", `flex flex-col items-center w-full p-3  rounded-xl font-medium hover:bg-neutral-two ${getActiveTabClasses("/team")}`, 0)}>${validate_component(People, "TeamIcon").$$render($$result, { class: "h-6 w-6" }, {}, {})} <div class="text-xs" data-svelte-h="svelte-214xqj">Team</div></button></div></div>`;
});
export {
  MainFrame as M,
  Package as P,
  People as a
};
