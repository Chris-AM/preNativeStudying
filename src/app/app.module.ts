import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeopleComponent } from './components/people/people.component';
import { AppComponent } from './app.component';
import { PeopleInputComponent } from './components/people-input/people-input.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PeopleService } from './services/peopleService/people.service';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PeopleInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  //now you are telling angular that you are going to inject the service
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
