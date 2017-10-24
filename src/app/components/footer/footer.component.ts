import { Component, Input }          from '@angular/core';
import { GlobalConstant }     from '../../helper/globalConstant';

@Component({
  selector: 'footer-component',
  template: `
    <footer id="footer">
        {{textfooter}}
        <ul class="f-menu">
            <li><a href="">Dashboard</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Change Password</a></li>
            <li><a href="">Logout</a></li>
        </ul>
    </footer>
  `
})
export class FooterComponent {

  @Input() textfooter: string;

}
