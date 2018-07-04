import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideogameListComponent } from './videogame-list/videogame-list.component';

const routes: Routes = [
    {path: 'videogames', component: VideogameListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [VideogameListComponent]