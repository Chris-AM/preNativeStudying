import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refreshin';
  people = ['Christian', 'María', 'Valentina', 'Vicente'];
  
  
  onCreatedPerson(name: string) {
    this.people.push(name);
  }

}