import {Directive, HostBinding, HostListener} from 'angular2/core'

@Directive({
    selector: '[autoGrow]'/*,
    host:{
        '(focus)':'onFocus()',
        '(blur)': 'onBlur()'
    } */
})

export class AutoGrowDirective{
   /* constructor(private el:ElementRef, private renderer:Renderer){
    }

    onFocus(){
        this.renderer.setElementStyle(this.el, 'width', '200')
    }

    onBlur(){
        this.renderer.setElementStyle(this.el, 'width', '100')
    } */
  @HostBinding('style.width.px')
  width:number = 120;

  @HostListener('focus')
  onFocus() {
    this.width=500;
  }

  @HostListener('blur')
  onBlur(){
    this.width = 120;
    }
}