import { Component, Directive, ElementRef, Input, AfterViewInit }  from '@angular/core';
import { GlobalConstant }                                   from '../../helper/globalConstant';

@Directive({
  selector: "[checkheader]"
})
export class HeaderChecked {
    layoutStatus: string;

    ngAfterViewInit(el: ElementRef) {
        //Get saved layout type from LocalStorage
        if (localStorage.getItem('ma-layout-status') == null) {
            localStorage.setItem('ma-layout-status', "1");
        } 
        this.layoutStatus = localStorage.getItem('ma-layout-status');
        if(!jQuery('#header-2')[0]) {  //Make it work only on normal headers
            if (this.layoutStatus == '1') {
                jQuery('body').addClass('sw-toggled');
                jQuery('#tw-switch').prop('checked', true);
            }
        }
    }
}

@Directive({
  selector: "[checkskin]"
})
export class SkinChecked {
    storageSkin: string;

    ngAfterViewInit(el: ElementRef) {
        //Get saved layout type from LocalStorage
        if (localStorage.getItem('storage-skin') == null) {
            localStorage.setItem('storage-skin', "blue");
        } 
        this.storageSkin = localStorage.getItem('storage-skin');
        jQuery('[data-current-skin]').attr('data-current-skin', this.storageSkin)
    }
}

@Component({
  selector: 'header-component',
  template: `
    <header id="header" class="clearfix" data-current-skin="blue" checkskin>
        <ul class="header-inner">
            <li id="menu-trigger" data-trigger="#sidebar">
                <div class="line-wrap">
                    <div class="line top"></div>
                    <div class="line center"></div>
                    <div class="line bottom"></div>
                </div>
            </li>
            
            <li class="logo hidden-xs">
                <a routerLink="./home" skipLocationChange>{{sitename}}</a>
            </li>
            
            <li class="pull-right">
                <ul class="top-menu">
                    <li id="toggle-width">
                        <div class="toggle-switch">
                            <input id="tw-switch" type="checkbox" checkheader hidden="hidden">
                            <label for="tw-switch" class="ts-helper"></label>
                        </div>
                    </li>
                    
                    <li class="dropdown">
                        <a data-toggle="dropdown" href=""><i class="tm-icon zmdi zmdi-more-vert"></i></a>
                        <ul class="dropdown-menu dm-icon pull-right">
                            <li>
                                <a><i class="zmdi zmdi-palette"></i> {{textcolorsetting}}</a>
                            </li>
                            <li class="divider hidden-xs"></li>
                            <li class="skin-switch hidden-xs">
                                <span class="ss-skin bgm-lightblue" data-skin="lightblue"></span>
                                <span class="ss-skin bgm-bluegray" data-skin="bluegray"></span>
                                <span class="ss-skin bgm-cyan" data-skin="cyan"></span>
                                <span class="ss-skin bgm-teal" data-skin="teal"></span>
                                <span class="ss-skin bgm-orange" data-skin="orange"></span>
                                <span class="ss-skin bgm-blue" data-skin="blue"></span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
  `
})
export class HeaderComponent {

    @Input() sitename: string;
    @Input() textcolorsetting: string;
}