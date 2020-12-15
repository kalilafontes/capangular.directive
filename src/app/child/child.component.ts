import { Component, AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit ,
   DoCheck, OnChanges, OnDestroy, OnInit, Input,
  SimpleChanges } from '@angular/core';
  @Component({
   selector: 'child-component',
   templateUrl:'./child.component.html',
   styleUrls: ['./child.component.css']
  
  })
  export class ChildComponent implements OnChanges, OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,AfterViewInit,
  AfterViewChecked,OnDestroy {
  @Input() message="";
  title:string = ""

  constructor() {
  console.log("ChildComponent:Constructor");
   }
   ngOnChanges() {
   console.log("ChildComponent:OnChanges");
   }
   ngOnInit() {
   this.title = "Título da página";
   console.log("ChildComponent:OnInit");
   }
   ngDoCheck() {
   console.log("ChildComponent:DoCheck");
   }
   ngAfterContentInit() {
   console.log("ChildComponent:AfterContentInit");
   }
   ngAfterContentChecked() {
   console.log("ChildComponent:AfterContentChecked");
   }
   ngAfterViewInit() {
   console.log("ChildComponent:AfterViewInit");
   }
   ngAfterViewChecked() {
  console.log("ChildComponent:AfterViewChecked");
   }
   ngOnDestroy() {
   console.log("ChildComponent:OnDestroy");
   }
  }