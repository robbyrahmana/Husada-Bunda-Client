"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeaderChecked = (function () {
    function HeaderChecked() {
    }
    HeaderChecked.prototype.ngAfterViewInit = function (el) {
        //Get saved layout type from LocalStorage
        if (localStorage.getItem('ma-layout-status') == null) {
            localStorage.setItem('ma-layout-status', "1");
        }
        this.layoutStatus = localStorage.getItem('ma-layout-status');
        if (!jQuery('#header-2')[0]) {
            if (this.layoutStatus == '1') {
                jQuery('body').addClass('sw-toggled');
                jQuery('#tw-switch').prop('checked', true);
            }
        }
    };
    return HeaderChecked;
}());
HeaderChecked = __decorate([
    core_1.Directive({
        selector: "[checkheader]"
    })
], HeaderChecked);
exports.HeaderChecked = HeaderChecked;
var SkinChecked = (function () {
    function SkinChecked() {
    }
    SkinChecked.prototype.ngAfterViewInit = function (el) {
        //Get saved layout type from LocalStorage
        if (localStorage.getItem('storage-skin') == null) {
            localStorage.setItem('storage-skin', "blue");
        }
        this.storageSkin = localStorage.getItem('storage-skin');
        jQuery('[data-current-skin]').attr('data-current-skin', this.storageSkin);
    };
    return SkinChecked;
}());
SkinChecked = __decorate([
    core_1.Directive({
        selector: "[checkskin]"
    })
], SkinChecked);
exports.SkinChecked = SkinChecked;
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "sitename", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "textcolorsetting", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header-component',
        template: "\n    <header id=\"header\" class=\"clearfix\" data-current-skin=\"blue\" checkskin>\n        <ul class=\"header-inner\">\n            <li id=\"menu-trigger\" data-trigger=\"#sidebar\">\n                <div class=\"line-wrap\">\n                    <div class=\"line top\"></div>\n                    <div class=\"line center\"></div>\n                    <div class=\"line bottom\"></div>\n                </div>\n            </li>\n            \n            <li class=\"logo hidden-xs\">\n                <a routerLink=\"./home\" skipLocationChange>{{sitename}}</a>\n            </li>\n            \n            <li class=\"pull-right\">\n                <ul class=\"top-menu\">\n                    <li id=\"toggle-width\">\n                        <div class=\"toggle-switch\">\n                            <input id=\"tw-switch\" type=\"checkbox\" checkheader hidden=\"hidden\">\n                            <label for=\"tw-switch\" class=\"ts-helper\"></label>\n                        </div>\n                    </li>\n                    \n                    <li class=\"dropdown\">\n                        <a data-toggle=\"dropdown\" href=\"\"><i class=\"tm-icon zmdi zmdi-more-vert\"></i></a>\n                        <ul class=\"dropdown-menu dm-icon pull-right\">\n                            <li>\n                                <a><i class=\"zmdi zmdi-palette\"></i> {{textcolorsetting}}</a>\n                            </li>\n                            <li class=\"divider hidden-xs\"></li>\n                            <li class=\"skin-switch hidden-xs\">\n                                <span class=\"ss-skin bgm-lightblue\" data-skin=\"lightblue\"></span>\n                                <span class=\"ss-skin bgm-bluegray\" data-skin=\"bluegray\"></span>\n                                <span class=\"ss-skin bgm-cyan\" data-skin=\"cyan\"></span>\n                                <span class=\"ss-skin bgm-teal\" data-skin=\"teal\"></span>\n                                <span class=\"ss-skin bgm-orange\" data-skin=\"orange\"></span>\n                                <span class=\"ss-skin bgm-blue\" data-skin=\"blue\"></span>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </header>\n  "
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map