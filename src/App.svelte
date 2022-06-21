<svelte:options tag="my-app" />

<script>
  import IonButton from "./lib/IonButton.svelte";
  import IonInput from "./lib/IonInput.svelte";
  import IonItem from "./lib/IonItem.svelte";
  import IonLabel from "./lib/IonLabel.svelte";
  import IonList from "./lib/IonList.svelte";

  let name = "Paul";
  let age = 64;
</script>

<!-- TODO - temporary link to external stylesheet -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ionic/core/css/core.min.css"
/>
<!-- TODO, find a way to make local link asset work for built web components -->
<!-- <link rel="stylesheet" href="/src/assets/app.css" /> -->
<IonList>
  <IonItem>
    <IonLabel>Name</IonLabel>
    <IonInput bind:value={name} />
  </IonItem>
  <IonItem>
    <IonLabel>Age</IonLabel>
    <IonInput type="number" bind:value={age} />
  </IonItem>
</IonList>

<IonButton
  on:click={() => alert(JSON.stringify({ name, age }))}
  color="secondary">Hello</IonButton
>
