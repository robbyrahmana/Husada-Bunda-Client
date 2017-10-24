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
var CheckBoxComponent = (function () {
    function CheckBoxComponent() {
        this.output = new core_1.EventEmitter();
    }
    CheckBoxComponent.prototype.ngOnInit = function () {
        this.value = this.generateArrayId(this.value);
    };
    CheckBoxComponent.prototype.generateArrayId = function (obj) {
        var data = this.generateArray(obj);
        var result = [];
        for (var i = 0; i < data.length; i++) {
            result.push(data[i]['id']);
        }
        return result;
    };
    CheckBoxComponent.prototype.setCheckboxOut = function (obj) {
        var index = this.value.indexOf(obj);
        if (index > -1) {
            this.value.splice(index, 1);
        }
        else {
            this.value.push(obj);
        }
        this.output.emit(this.value);
    };
    CheckBoxComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    return CheckBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CheckBoxComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CheckBoxComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheckBoxComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CheckBoxComponent.prototype, "editMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheckBoxComponent.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CheckBoxComponent.prototype, "output", void 0);
CheckBoxComponent = __decorate([
    core_1.Component({
        selector: "checkbox-component",
        template: "\n        <div class=\"form-group\">\n            <label for=\"{{id}}\" class=\"col-sm-2 control-label\"><ng-content></ng-content></label>\n            <div class=\"col-sm-10\">\n                <div class=\"fg-line\">\n                    <div class=\"checkbox m-b-15\" *ngFor=\"let v of generateArray(data)\">\n                        <label>\n                            <input type=\"checkbox\" \n                            name = \"{{id}}\" \n                            [value]=\"v.id\"\n                            [checked]=\"value.indexOf(v.id) >= 0\"\n                            (click)=\"setCheckboxOut(v.id)\"\n                            [disabled]=\"editMode\"\n                            >\n                            <i class=\"input-helper\"></i>\n                            {{v.display}}\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
    })
], CheckBoxComponent);
exports.CheckBoxComponent = CheckBoxComponent;
//# sourceMappingURL=checkbox.component.js.map