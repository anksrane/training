import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>Ng If</h1>
  <h2 *ngIf="true">
    NG If simple
  </h2>

  <h2 *ngIf="displayIf; else elseBlock">
    If Loop
  </h2>
  <ng-template #elseBlock>
  <h2>
    else Loop
  </h2>
  </ng-template>

  <div *ngIf="displayIf; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
    <h2>new style if</h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2>new style else</h2>
  </ng-template>
  <hr>
  <h1>Ng Switch</h1>
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">Red Color</div>
    <div *ngSwitchCase="'blue'">Blue Color</div>
    <div *ngSwitchCase="'green'">Green Color</div>
    <div *ngSwitchDefault>Pick Again</div>
  </div>
  <hr>
  <h1>Ng For</h1>
  <div *ngFor="let color of colors; index as i">
    <h2>{{i}} {{color}}</h2>
  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  displayIf=false;
  public color="black";
  public colors=["red","blue","green","yellow"];
  constructor() { }
  ngOnInit(): void {
  }
}
