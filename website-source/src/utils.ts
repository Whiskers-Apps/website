import { goto } from '$app/navigation';


export function openLink(url: string) {
  window.open(url, "_blank");
}

export function goToRoute(route: string) {
  goto(route, {replaceState: true})
}
