import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {path: 'videogames', component: VideogameListComponent, pathMatch: 'full'},
    {path: 'contact', component: ContactComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [VideogameListComponent, ContactComponent]
