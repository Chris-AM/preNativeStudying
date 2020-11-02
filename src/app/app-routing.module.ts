import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleInputComponent } from './components/people-input/people-input.component';
import { PeopleComponent } from './components/people/people.component';

const ROUTES: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'input', component: PeopleInputComponent }
];

@NgModule({
  //Import the RouterModule:
  //It's important to import the RouterModule to tell angular about our routes
  //forRoot:
  //Creates and configures a module with all the router providers
  //and directives.Optionally sets up an application listener to perform 
  //an initial navigation.
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}