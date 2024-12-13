import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./shared/components/layout/content/content.component";
import { FullComponent } from "./shared/components/layout/full/full.component";
import { full } from "./shared/routes/full.routes";
import { content } from "./shared/routes/content.routes";
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: content,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: FullComponent,
    children: full,
    canActivate: [AuthGuard],  // Protege esta ruta con el AuthGuard
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), // Ruta para el login
  },
  {
    path: '**',
    redirectTo: '/login',  // Redirige a login si la ruta no existe
  },
  {
    path: '',
    component: ContentComponent,
    children: content,
  },
  {
    path: '',
    component: FullComponent,
    children: full,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: "enabled",
        scrollPositionRestoration: "enabled",
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
