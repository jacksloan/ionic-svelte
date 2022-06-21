import { initialize } from "@ionic/core/components";
import { defineCustomElement as defineButton } from "@ionic/core/components/ion-button";
import { defineCustomElement as defineList } from "@ionic/core/components/ion-list";
import { defineCustomElement as defineItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineInput } from "@ionic/core/components/ion-input";
import { defineCustomElement as defineLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineApp } from "@ionic/core/components/ion-app";
import { defineCustomElement as defineHeader } from "@ionic/core/components/ion-header";
import { defineCustomElement as defineContent } from "@ionic/core/components/ion-content";
import { defineCustomElement as defineToolbar } from "@ionic/core/components/ion-toolbar";
import { defineCustomElement as defineTitle } from "@ionic/core/components/ion-title";

initialize();

defineList();
defineItem();
defineButton();
defineInput();
defineLabel();
defineApp();
defineContent();
defineHeader();
defineTitle();
defineToolbar();

export * from "./App.svelte";
