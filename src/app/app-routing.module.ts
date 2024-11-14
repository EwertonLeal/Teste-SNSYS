import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { Page404Component } from './extrapages/page404/page404.component';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./account/auth/auth.module').then(m => m.AuthModule), canActivate: [LoginGuard] },
  { path: 'dashboard', loadChildren: () => import('./layouts/layouts.module').then(l => l.LayoutsModule), canActivate: [AuthGuard] },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
