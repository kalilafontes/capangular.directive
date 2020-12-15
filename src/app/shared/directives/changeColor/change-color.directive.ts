import { Directive, ElementRef, HostListener,  Input} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @Input('appChangeColor') highlightColor: string = "";
  @Input('appChangeSize') fontSizes: string = "";

  constructor(private el: ElementRef) {   
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');    
    this.sizeFonte(this.fontSizes || '50px');
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
    this.sizeFonte("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private sizeFonte(fontSize:string){
    this.el.nativeElement.style.fontSize = fontSize ;

  }
  

}
