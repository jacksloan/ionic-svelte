<svelte:options tag="my-app" />

<script lang="ts">
  import { onMount } from "svelte";
  import { styles } from "./lib/ionic-styles";

  import MyApp from "./lib/MyApp.svelte";

  /**
   * An id is required to property inject component styles into the shadow root
   */
  export let id: string;

  // HACK!! in order to apply all
  // ionic styles to the web component
  // we have to manually add styles to the shadowroot of this element
  onMount(() => {
    const style = document.createElement("style");
    style.innerHTML = styles;
    document.getElementById(id).shadowRoot.prepend(style);
  });
</script>

<MyApp />
