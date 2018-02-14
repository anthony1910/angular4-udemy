import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey Guys</h1>
  <p>{{myObject.location}}</p>

  <div *ngIf="myArr; then tpl1 else tpl2"></div>

  <ng-template #tpl1>Yes</ng-template>
  <ng-template #tpl2>No</ng-template>

  `/*
  <ul>
    <li *ngFor="let arr of myArr">{{arr}}</li>
    <li *ngIf="myArr; else otherTpl">Yeah, I exist.</li>
  </ul>

  <ng-template #otherTpl>No, I do.</ng-template>
  */
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him', 'hers', 'yours'];

}
