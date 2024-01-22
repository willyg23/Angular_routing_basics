import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
//you can define each route in your application as an object
//basic route:
  //give your route a path, then route it to a specifc component that you've generated.

// more real world route:
  /*
    pulling info from a database
    route to a specific ID to show more info about that item
    you might have thousands to millions of items in your database, so you can't hard code all of those routes manually
  */

  const routes: Routes = [
  //set up the home component as the root path
  //homeComponent will be rendered at the position of the router outlet
  { path:'', component: HomeComponent },

  { 
   path:'animals',
   component: AnimalsComponent,
   // the children property takes an array of routes, resulting in a classic tree structure
   // you can create a dynamic URL parameter, by putting a ':' in front of whatever that colon is
   // we use :name as we're looking up names in a database
   // we can navigate to routes such as 'animal/elephant' with :name
    // or any other dynamic property in the second half of the URL segment
   children: [
      { path: ':name', component: AnimalDetailComponent},
   ]
  
  },

  //is a child route of animals
  //create child route that will be rendered inside it's parent by adding the childern property to the parent route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
