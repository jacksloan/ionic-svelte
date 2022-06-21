import { defineCustomElement as defineButton } from "@ionic/core/components/ion-button";
import { defineCustomElement as defineList } from "@ionic/core/components/ion-list";
import { defineCustomElement as defineItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineInput } from "@ionic/core/components/ion-input";
import { defineCustomElement as defineLabel } from "@ionic/core/components/ion-label";
import { initialize } from "@ionic/core/components";

initialize();

defineList();
defineItem();
defineButton();
defineInput();
defineLabel();

export * from "./App.svelte";
