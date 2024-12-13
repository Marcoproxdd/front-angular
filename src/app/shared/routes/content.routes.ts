import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "events",
    loadChildren: () =>
      import(
        "../../features/events/events.module"
      ).then((m) => m.EventsModule),
  },{
    path: "login",
    loadChildren: () =>
      import(
        "../../features/login/login.module"
      ).then((m) => m.LoginModule),
  },

];
