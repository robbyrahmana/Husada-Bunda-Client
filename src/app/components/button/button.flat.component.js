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
var ButtonFlatComponent = (function () {
    function ButtonFlatComponent() {
        /* default, primary, info, success, warning, danger*/
        this.color = 'default';
        this.icon = 'home';
        this.text = 'Home';
    }
    return ButtonFlatComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ButtonFlatComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ButtonFlatComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ButtonFlatComponent.prototype, "text", void 0);
ButtonFlatComponent = __decorate([
    core_1.Component({
        selector: 'button-flat-component',
        template: "\n    <button \n      class=\"btn btn-{{color}} \n      btn-icon-text \n      waves-effect \n      waves-float\"><i class=\"zmdi zmdi-{{icon}}\"></i> <ng-content></ng-content></button>\n  "
    })
], ButtonFlatComponent);
exports.ButtonFlatComponent = ButtonFlatComponent;
//# sourceMappingURL=button.flat.component.js.map