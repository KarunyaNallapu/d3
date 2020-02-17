import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
//import{IEmployee} from '@'
import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  obs:Observable
  constructor() { }
  getEmployees(){
    return[
      {id:4,"name":"jhrf","age":34},
      {id:5,"name":" vvfv","age":35},
      {id:6,"name":" mkhnv","age":36},
      {id:7,"name":"jhcgvbrf","age":37},
      {id:8,"name":"dfc","age":38}
    ];
  }
}
