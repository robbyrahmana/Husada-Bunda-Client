"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var globalConstant_1 = require("../helper/globalConstant");
var globalIntercept_1 = require("../service/intercept/globalIntercept");
var ScrollbarChecked = (function () {
    function ScrollbarChecked() {
    }
    ScrollbarChecked.prototype.ngAfterViewInit = function (el) {
        if (!$('html').hasClass('ismobile')) {
            //On Custom Class
            if ($('.c-overflow')[0]) {
                this.scrollBar('.c-overflow', 'minimal-dark', 'y');
            }
        }
    };
    ScrollbarChecked.prototype.scrollBar = function (selector, theme, mousewheelaxis) {
        $(selector).mCustomScrollbar({
            theme: theme,
            scrollInertia: 100,
            axis: 'yx',
            mouseWheel: {
                enable: true,
                axis: mousewheelaxis,
                preventDefault: true
            }
        });
    };
    return ScrollbarChecked;
}());
ScrollbarChecked = __decorate([
    core_1.Directive({
        selector: "[scrollbar]"
    })
], ScrollbarChecked);
exports.ScrollbarChecked = ScrollbarChecked;
var SiteComponent = (function (_super) {
    __extends(SiteComponent, _super);
    function SiteComponent(globalConstant, globalIntercept) {
        var _this = _super.call(this, globalIntercept) || this;
        _this.globalConstant = globalConstant;
        jQuery('body').removeClass('login-content');
        return _this;
    }
    return SiteComponent;
}(globalConstant_1.GlobalConstant));
SiteComponent = __decorate([
    core_1.Component({
        selector: 'my-site',
        templateUrl: './site.component.html',
        styleUrls: ['./site.component.css'],
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, globalIntercept_1.globalIntercept])
], SiteComponent);
exports.SiteComponent = SiteComponent;
//# sourceMappingURL=site.component.js.map