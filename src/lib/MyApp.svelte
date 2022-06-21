<script>
  import IonApp from "./IonApp.svelte";
  import IonButton from "./IonButton.svelte";
  import IonContent from "./IonContent.svelte";
  import IonHeader from "./IonHeader.svelte";
  import IonInput from "./IonInput.svelte";
  import IonItem from "./IonItem.svelte";
  import IonLabel from "./IonLabel.svelte";
  import IonList from "./IonList.svelte";
  import IonTitle from "./IonTitle.svelte";
  import IonToolbar from "./IonToolbar.svelte";

  let name = "Paul";
  let age = 64;
</script>

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
