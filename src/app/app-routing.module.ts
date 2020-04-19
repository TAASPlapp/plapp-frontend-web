import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error404Component} from "./components/errorPage/error404.component";
import {ServicesGuard} from "./services.guard";



const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},
  {path: 'site', loadChildren: () => import('./components/site/site.module').then(m => m.SiteModule),
    canActivate: [ServicesGuard]
  },
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
