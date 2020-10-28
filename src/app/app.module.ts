import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeopleComponent } from './components/people/people.component';
import { AppComponent } from './app.component';
import { PeopleInputComponent } from './components/people-input/people-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PeopleInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
