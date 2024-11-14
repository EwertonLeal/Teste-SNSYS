import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerticalComponent } from './vertical/vertical.component';
import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [
    {
        path: 'dashboard',
        component: VerticalComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
