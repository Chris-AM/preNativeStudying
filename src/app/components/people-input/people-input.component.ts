import { Component } from '@angular/core';

@Component({
  selector: 'app-people-input',
  templateUrl: './people-input.component.html',
  styleUrls: ['./people-input.component.css']
})

export class PeopleInputComponent {

  inPutPersonName = ' ';
  
  onCreatePerson(personName: string) {
    alert('person ' + this.inPutPersonName + ' created ');
    this.inPutPersonName = '';
  }
}