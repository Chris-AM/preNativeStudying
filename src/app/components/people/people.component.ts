import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/peopleService/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit{

  peopleList: String[];
  //private peopleService: PeopleService;

  //here the service is injected
  constructor(private ppleService: PeopleService) {
    
    //this.peopleList = ppleService.people;
  }

  ngOnInit() {
    this.peopleList = this.ppleService.people;
    
  }
}