import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-flat-component',
  template: `
    <button 
      class="btn btn-{{color}} 
      btn-icon-text 
      waves-effect 
      waves-float"><i class="zmdi zmdi-{{icon}}"></i> <ng-content></ng-content></button>
  `
})
export class ButtonFlatComponent {

    /* default, primary, info, success, warning, danger*/
    @Input() color: string = 'default'; 
    @Input() icon: string = 'home'; 
    @Input() text: string = 'Home'; 

}
