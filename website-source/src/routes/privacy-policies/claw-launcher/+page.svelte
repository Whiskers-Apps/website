<script lang="ts">
  import MainFrame from "$lib/components/MainFrame.svelte";
  import { goToRoute } from "../../../utils";
</script>

<MainFrame>
  <button
    class="text-banana text-lg hover:underline w-fit"
    on:click={() => {
      goToRoute("/projects");
    }}>Back</button
  >
  <div class="flex flex-col justify-center items-center">
    <img
      class=" lg:w-3/5 w-full overflow-hidden rounded-2xl border border-neutral-six"
      src="https://raw.githubusercontent.com/Whiskers-Apps/assets/refs/heads/master/banners/projects/claw-launcher.webp"
      alt="Claw Launcher Banner"
    />
    <h1 class="font-medium text-4xl mt-8">Claw Launcher - Privacy Policy</h1>
  </div>
  <div class="mt-16 text-text-two">
    <div class=" space-y-4">
      <h2 class="font-medium text-3xl text-text">App Permissions</h2>
      <div class="p-4 bg-neutral-four rounded-2xl">
        <h3 class="font-medium text-xl text-text">Query All Packages</h3>
        <p>This one is obvious. It needs to query all packages in order to show them on the app.</p>
      </div>
      <div class="p-4 bg-neutral-four rounded-2xl">
        <h3 class="font-medium text-xl text-text">Delete Packages</h3>
        <p>
          This permission is used when long clicking on an app and clicking on the uninstall button
          it shows the Android uninstall package request.
        </p>
      </div>
      <div class="p-4 bg-neutral-four rounded-2xl">
        <h3 class="font-medium text-xl text-text">Expand Status Bar</h3>
        <p>
          This permission has the sole purpose of opening the status bar when swiping down on the
          home screen. Like many other launchers do.
        </p>
      </div>
      <div class="p-4 bg-neutral-four rounded-2xl">
        <h3 class="font-medium text-xl text-text">Internet</h3>
        <p>
          The app needs internet permissions in order to get the search engines and bookmarks icons
          from the url. This provides a better looking experience to the user when searching/editing
          them.
        </p>
      </div>
      <div class="p-4 bg-neutral-four rounded-2xl">
        <h3 class="font-medium text-xl text-text">Biometric</h3>
        <p>
          The app offers an app fingerprint lock feature and it's required to have it in order to
          function.
        </p>
      </div>
      <h2 class="font-medium text-3xl text-text">TLDR;</h2>
      <div class="p-4 bg-neutral-four rounded-2xl">
        <p>
          Basically claw launcher doesn't collect any personal data and all the permissions are
          required for a good experience on the app.
        </p>
      </div>
    </div>
  </div>
</MainFrame>
