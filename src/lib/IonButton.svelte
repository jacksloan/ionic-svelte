<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let color: string = "primary";

  const dispatch = createEventDispatcher();
</script>

<ion-button on:click={(e) => dispatch("click", e)} {color}>
  <slot />
</ion-button>
