import { Component, EventEmitter, OnInit } from '@angular/core';

import { PeopleService } from 'src/app/services/peopleService/people.service';

@Component({
  selector: 'app-people-input',
  templateUrl: './people-input.component.html',
  styleUrls: ['./people-input.component.css']
})

export class PeopleInputComponent implements OnInit {

  inPutPersonName = ' ';

  constructor(private peopleService: PeopleService) {
  }


  onCreatePerson() {
    alert('person ' + this.inPutPersonName + ' created ');
    this.peopleService.addPerson(this.inPutPersonName);
    this.inPutPersonName = '';
  }

  ngOnInit() {

  }

}