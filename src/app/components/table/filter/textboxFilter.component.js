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
var TextBoxFilterComponent = (function () {
    function TextBoxFilterComponent() {
        this.output = new core_1.EventEmitter();
    }
    TextBoxFilterComponent.prototype.sendData = function (data) {
        this.output.emit(data);
    };
    return TextBoxFilterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TextBoxFilterComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TextBoxFilterComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TextBoxFilterComponent.prototype, "output", void 0);
TextBoxFilterComponent = __decorate([
    core_1.Component({
        selector: "textbox-filter-component",
        template: "\n        <div class=\"col-sm-3\">\n            <div class=\"form-group fg-float\">\n                <div class=\"fg-line\">\n                    <input type=\"text\" name=\"{{id}}\" [(ngModel)]=\"data\" (blur)=\"sendData(data)\" class=\"form-control input-sm fg-input\" id=\"{{id}}\">\n                    <label class=\"fg-label\" for=\"{{id}}\"><ng-content></ng-content></label>\n                </div>\n            </div>\n        </div>\n    "
    })
], TextBoxFilterComponent);
exports.TextBoxFilterComponent = TextBoxFilterComponent;
//# sourceMappingURL=textboxFilter.component.js.map