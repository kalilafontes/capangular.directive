import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {
  title = "App Root";
  color: string ="";
  fontSize: string = "";
  rootMessage = "Mensagem inicial";

  displayChild: boolean = false;
  constructor() {
    console.log("AppComponent:Constructor");
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  updateMessage(form: NgForm) {
    console.log("AppComponent:UpdateMessage");
    this.rootMessage = form.value.rootMessage;
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("AppComponent:OnChanges");

  }
  ngOnInit() {
    console.log("AppComponent:OnInit");

  }
  ngDoCheck() {
    console.log("AppComponent:DoCheck");

  }
  ngAfterContentInit() {
    console.log("AppComponent:AfterContentInit");

  }
  ngAfterContentChecked() {

    console.log("AppComponent:AfterContentChecked");


  }
  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");

  }
  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");


  }
  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");


  }
}
