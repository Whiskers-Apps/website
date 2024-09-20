export function openLink(url: string) {
  window.open(url, "_blank");
}

export function goToRoute(route: string) {
  window.location.replace(route);
}
