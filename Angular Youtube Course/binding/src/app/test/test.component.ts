import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
    <h2>
      Welcome to {{fname}}
    </h2>
    <input [id]="myId" type="text" value="Vishwas">
    <h2>{{2+2+3}} Expression</h2>
    <h2>{{"Welcome " + fname}} String Concatination</h2>
    <h2>{{fname.length}} In Build Method</h2>
    <h2 [class]="successClass">{{fname.toUpperCase()}} Class Binding Normal</h2>
    <h2 class="text-success">{{greetUser()}}</h2>
    <h2 [class.text-danger]="hasError">{{siteURL}} Class Binding Conditional</h2>
    <h2 [ngClass]="messageClasses">{{"Welcome " + fname}} Class Binding Conditional more classes</h2>
    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError?'red':'green'">Style Binding Conditional</h2>
    <h2 [style.color]="highlightColor">Style Binding Conditional</h2>
    <button (click)="onClick($event)">Event Binding</button> {{msg}}
    <div>
    <input #myInput type="text" placeholder="Template Reference Variable">
    <button (click)="logMessage(myInput.value)">Template Reference Variable</button>
    </div>
    <br>
    <!--Two Way Binding-->
    <input [(ngModel)]="uname" type="text" placeholder="two way binding">
    {{uname}}
    `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {
  public fname="Component.ts";
  public siteURL=window.location.href;
  public myId="testId";
  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public highlightColor="brown";
  public msg="";
  constructor() { }
  ngOnInit(): void {
  }
  greetUser(){
    return "Hello " + this.fname;
  }
  onClick(event){
    console.log(event);
    this.msg="Welcome to Event Binding(Variable)";
  }
  logMessage(value){
    console.log(value);
  }
  /*Two Way Binding */
  public uname="";
}
