// Imports modules you need to make this .ts work

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports components

import { HomeComponent } from './home/home.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { ContactComponent } from './contact/contact.component';

// Defining the constant to be recalled in app.module.ts to make routing work

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'videogames', component: VideogameListComponent},
    {path: 'contact', component: ContactComponent}
];

// Exporting this module and the components to be routed in app.module.ts
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, VideogameListComponent, ContactComponent]
