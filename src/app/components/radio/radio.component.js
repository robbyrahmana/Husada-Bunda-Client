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
//our root app component
var core_1 = require("@angular/core");
var RadioComponent = (function () {
    function RadioComponent() {
        this.output = new core_1.EventEmitter();
    }
    RadioComponent.prototype.asignValue = function (data) {
        this.output.emit(data);
    };
    RadioComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    return RadioComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RadioComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RadioComponent.prototype, "editMode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RadioComponent.prototype, "output", void 0);
RadioComponent = __decorate([
    core_1.Component({
        selector: "radio-component",
        template: "\n        <div class=\"form-group\">\n            <label for=\"{{id}}\" class=\"col-sm-2 control-label\"><ng-content></ng-content></label>\n            <div class=\"col-sm-10\">\n                <div class=\"fg-line\">\n                    <div class=\"radio m-b-15\" *ngFor=\"let v of generateArray(data)\">\n                        <label>\n                            <input type=\"radio\" \n                            name = \"{{id}}\" \n                            [value]=\"v.id\"  \n                            [checked]=\"v.id === value\"\n                            [disabled]=\"editMode\"\n                            (click)=\"asignValue(v.id)\">\n                            <i class=\"input-helper\"></i>\n                            {{v.display}}\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
    })
], RadioComponent);
exports.RadioComponent = RadioComponent;
//# sourceMappingURL=radio.component.js.map