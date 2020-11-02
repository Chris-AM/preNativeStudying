import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService } from 'src/app/services/peopleService/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy{

  fetching: string = "Fetching data";
  isfetching: boolean = false;
  peopleList: String[];
  private pplListSubs: Subscription
  //private peopleService: PeopleService;

  //here the service is injected
  constructor(private ppleService: PeopleService) {
    
    //this.peopleList = ppleService.people;
  }
  ngOnInit() {
    
    this.pplListSubs = this.ppleService.actualizedPeople.subscribe(people => {
      this.peopleList = people
      this.isfetching = false;
    });
    this.isfetching = true;
    this.ppleService.fetchPeople();
  }
  onRemovePerson(personName: string) {
    this.ppleService.removePerson(personName);
  }
  ngOnDestroy() {
    //unsuscribe is used to prevent memory leaks
    this.pplListSubs.unsubscribe();
  }
}