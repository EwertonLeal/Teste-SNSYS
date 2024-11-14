import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';
import { Page404Component } from './extrapages/page404/page404.component';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule), canActivate: [LoginGuard] },
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
