import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blockheader-component',
  template: ` 
    <div class="block-header">
        <h2><ng-content></ng-content></h2>
    </div> 
  `
})
export class BlockHeaderComponent {
}

/*<ul class="actions">
          <ol class="breadcrumb">
              <li><a routerLink="./home" skipLocationChange>Home</a></li>
              <li class="active">Hedaer</li>
              <li class="active">Body</li>
          </ol>
        </ul>*/