<script lang="ts">
  export let value: any;
  export let type: "text" | "number" = "text";
</script>

<ion-input {value} {type} on:ionChange={(e) => (value = e.detail.value)}>
  <slot />
</ion-input>
