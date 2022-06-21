import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      exclude: ["src/App.svelte"],
    }),
    svelte({
      exclude: [
        "src/lib/IonButton.svelte",
        "src/lib/IonList.svelte",
        "src/lib/IonInput.svelte",
        "src/lib/IonLabel.svelte",
        "src/lib/IonItem.svelte",
        "src/lib/IonApp.svelte",
        "src/lib/IonHeader.svelte",
        "src/lib/IonContent.svelte",
        "src/lib/IonTitle.svelte",
        "src/lib/IonToolbar.svelte",
        "src/lib/MyApp.svelte",
      ],
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
