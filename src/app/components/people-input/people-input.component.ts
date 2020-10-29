//EventEmitter = Use in components with the @Output directive 
//to emit custom events synchronously or asynchronously, 
//and register handlers for those events by subscribing to an 
//instance.
import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people-input',
  templateUrl: './people-input.component.html',
  styleUrls: ['./people-input.component.css']
})

export class PeopleInputComponent {

  //1) Output creates events
  //2) EventEmitter <the type of data our event will eventually 
  //hold when the event be emitted>
  //the @output let the emit listen to the outside
  @Output() createPerson = new EventEmitter <string>();
  inPutPersonName = ' ';
  
  onCreatePerson(personName: string) {
    alert('person ' + this.inPutPersonName + ' created ');
    this.createPerson.emit(this.inPutPersonName);
    this.inPutPersonName = '';
  }

 
}