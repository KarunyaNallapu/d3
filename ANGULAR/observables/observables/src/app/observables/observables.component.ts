import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observables',
  // templateUrl: './observables.component.html',
  // styleUrls: ['./observables.component.css']
  template:`
  <h2>Employee List</h2>
  <ul *ngFor="let observables of observables">
    <li>{{observables}}</li>
</ul>
  `

})
export class observablesComponent implements OnInit {
public obseravables=[
  {id:4,"name":"jhrf","age":34},
  {id:5,"name":" vvfv","age":35},
  {id:6,"name":" mkhnv","age":36},
  {id:7,"name":"jhcgvbrf","age":37},
  {id:8,"name":"dfc","age":38}
]
  constructor() { }

  ngOnInit() {
  }

}
