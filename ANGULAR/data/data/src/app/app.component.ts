import { Component } from '@angular/core';
import Character from './character';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   characters: Character[] = [
    {
    name: 'Karunya',
    age: '45',
    gender: 'Female',
        status: 'Local'
    },
    {
    name: 'Diana',
    age: '40',
    gender: 'Female',
    status: 'Non-Local'
    },
    {
    name: 'Joe',
    age: '12',
    gender: 'Female',
    status: 'Local'
    },
    {
    name: 'Jhon',
    age: '56',
    gender: 'Female',
    status: 'Non-Local'
    }
  ];
}
