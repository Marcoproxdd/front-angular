import { Menu } from "src/app/core/interfaces/ui/nav.interface";

export const MENU_ITEMS: Menu[] = [
  {
    id: "backOffice",
    headTitle1: "words.backOffice",
  },
  {
    id: "apostar",
    title: "apostar",
    icon: "home",
    type: "sub",
    badgeType: "light-primary",
    children: [
      {
        id: "events",
        path: "events/events",
        title: "Eventos deportivos",
        type: "link",
      },
      
    ],
  },
];
