import { Component, Input } from '@angular/core';;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  //@Input() and @Output() allow Angular to share data 
  //between the parent context and child directives or 
  //components.An @Input() property is writable while an 
  //@Output() property is observable.
  @Input() peopleList: String[]
}