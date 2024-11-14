import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerticalComponent } from './vertical/vertical.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: VerticalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
