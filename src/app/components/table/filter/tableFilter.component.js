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
var TableFilterComponent = (function () {
    function TableFilterComponent() {
        this.output = new core_1.EventEmitter();
    }
    TableFilterComponent.prototype.filterData = function () {
        this.output.emit();
    };
    return TableFilterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableFilterComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableFilterComponent.prototype, "output", void 0);
TableFilterComponent = __decorate([
    core_1.Component({
        selector: "table-filter-component",
        template: "\n        <div class=\"card-header\">\n            <a class=\"btn-icon-text waves-effect\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\"><i class=\"zmdi zmdi-search\"></i> Filter Data</a>\n            <div class=\"collapse m-t-20\" id=\"collapseExample\">\n            <form class=\"row p-l-20\" role=\"form\">\n\n                <ng-content></ng-content>\n                          \n                <div class=\"col-sm-2\">\n                    <button class=\"btn btn-primary btn-icon btn-sm waves-effect waves-circle\" (click)=\"filterData()\"><i class=\"zmdi zmdi-search\"></i></button>\n                </div>\n            </form>\n            </div>\n        </div>\n    "
    })
], TableFilterComponent);
exports.TableFilterComponent = TableFilterComponent;
//# sourceMappingURL=tableFilter.component.js.map