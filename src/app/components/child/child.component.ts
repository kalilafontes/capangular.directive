import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {
  title = "Child"

  @Input() message = "";

  displayChild: boolean = false;
  constructor() {
    console.log("Child:Constructor");
    console.log(this.message);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }
  ngOnChanges() {
    console.log("Child:OnChanges");
    console.log(this.message);

  }
  ngOnInit() {
    console.log("Child:OnInit");
    console.log(this.message);

  }
  ngDoCheck() {
    console.log("Child:DoCheck");

  }
  ngAfterContentInit() {
    console.log("Child:AfterContentInit");

  }
  ngAfterContentChecked() {

    console.log("Child:AfterContentChecked");


  }
  ngAfterViewInit() {
    console.log("Child:AfterViewInit");

  }
  ngAfterViewChecked() {
    console.log("Child:AfterViewChecked");


  }
  ngOnDestroy() {
    console.log("Child:OnDestroy");


  }
}
