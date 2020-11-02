import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

//@Injectable allows inject services in components with 
//the dependency inject feature
@Injectable({ providedIn: 'root' })
export class PeopleService {
  actualizedPeople = new Subject<string[]>();
  people: string[] = [];

  constructor(private http: HttpClient) {

  }

  fetchPeople() {
    //the rxjs map receives data and the pipe changes it the way we want
    this.http.get<any>('https://swapi.dev/api/people')
      .pipe(map(resData => {
        //the return is the normal JS map
        return resData.results.map(character => character.name);
      })).subscribe(transformedData => { this.actualizedPeople.next(transformedData)
  });
}

addPerson(name: string) {
  this.people.push(name);
  console.log(this.people);
  this.actualizedPeople.next(this.people);
}

removePerson(name: string) {
  this.people = this.people.filter(person => {
    return person !== name;
  })
  this.actualizedPeople.next(this.people);
}

}