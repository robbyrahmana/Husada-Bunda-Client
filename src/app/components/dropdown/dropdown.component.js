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
var error_domain_1 = require("../../service/domain/error/error.domain");
var globalConstant_1 = require("../../helper/globalConstant");
var DropdownComponent = (function () {
    function DropdownComponent(globalConstant) {
        this.globalConstant = globalConstant;
        this.output = new core_1.EventEmitter();
    }
    DropdownComponent.prototype.ngOnChanges = function (changes) {
        this.noError();
    };
    DropdownComponent.prototype.asignValue = function (data) {
        this.output.emit(data);
    };
    DropdownComponent.prototype.errorFound = function (msg) {
        this.isError = true;
        this.msgData = msg.split(",");
        if (this.globalConstant.text_format == "ind") {
            msg = this.msgData[1];
        }
        else {
            msg = this.msgData[0];
        }
        this.errMsg = msg;
    };
    DropdownComponent.prototype.noError = function () {
        this.isError = false;
        this.errMsg = "";
    };
    DropdownComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    return DropdownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "editMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", error_domain_1.FieldErrors)
], DropdownComponent.prototype, "error", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "output", void 0);
DropdownComponent = __decorate([
    core_1.Component({
        selector: "dropdown-component",
        template: "\n        <div class=\"form-group {{isError ? 'has-error' : ''}}\">\n            <label for=\"{{id}}\" class=\"col-sm-2 control-label\"><ng-content></ng-content></label>\n            <div class=\"col-sm-10\">\n                <div class=\"fg-line\">\n                    <div class=\"select\">\n                      <select class=\"form-control\" name = \"{{id}}\"\n                            [(ngModel)]=\"value\"\n                            (blur)=\"asignValue(value)\"\n                            [disabled]=\"editMode\"\n                        >\n                        <option *ngFor=\"let v of generateArray(data)\" [value]=\"v.id\">{{v.display}}</option>\n                      </select>\n                    </div>\n                </div>\n                <small class=\"help-block\">{{errMsg}}</small>\n            </div>\n        </div>\n        <div class=\"clearfix\" *ngFor=\"let val of error\">{{id == val.field ? errorFound(val.message) : noError()}}</div>\n    "
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant])
], DropdownComponent);
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map