<svelte:options tag="my-app" />

<script>
  import IonApp from "./lib/IonApp.svelte";
  import IonButton from "./lib/IonButton.svelte";
  import IonContent from "./lib/IonContent.svelte";
  import IonHeader from "./lib/IonHeader.svelte";
  import IonInput from "./lib/IonInput.svelte";
  import IonItem from "./lib/IonItem.svelte";
  import IonLabel from "./lib/IonLabel.svelte";
  import IonList from "./lib/IonList.svelte";
  import IonTitle from "./lib/IonTitle.svelte";
  import IonToolbar from "./lib/IonToolbar.svelte";

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
<IonApp>
  <IonHeader>
    <IonToolbar>
      <IonTitle>My App</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
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
  </IonContent>
  <IonButton
    on:click={() => alert(JSON.stringify({ name, age }))}
    color="secondary"
  >
    Submit
  </IonButton>
</IonApp>
