import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-test';


  img =[
    "assets/img/person/1.jpg",
    "assets/img/person/2.jpg",
    "assets/img/person/3.jpg",
    "assets/img/person/4.jpg",
  ]

  text =[
    "Hi there! my name is Fredrick, do you want to be friend with me",
    "Hi there! my name is Mario, do you want to be friend with me",
    "Hi there! my name is George, do you want to be friend with me",
    "Hi there! my name is Alex, do you want to be friend with me",
  ]


}
