import { Injectable } from '@angular/core';

//@Injectable allows inject services in components with 
//the dependency inject feature
@Injectable({providedIn: 'root'})
export class PeopleService {

  people = ['Christian', 'María', 'Valentina', 'Vicente'];

  addPerson(name: string) {
    this.people.push(name);
    console.log(this.people);
  }
}