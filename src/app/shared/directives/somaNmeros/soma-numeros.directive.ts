import { Directive, ElementRef, Input, OnInit} from '@angular/core';
//import { runInThisContext } from 'vm';

@Directive({
  selector: '[appSomaNumeros]'
})
export class SomaNumerosDirective {

  @Input() number1: number = 0;
  @Input() number2: number = 0;
  @Input() somar:number = 0;
  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement = this.soma;
  }
 
  soma(){
    this.somar = this.number1 + this.number2
    return this.somar;
  }
  
  public ngOnInit() {
    this.soma();
  }
  

}