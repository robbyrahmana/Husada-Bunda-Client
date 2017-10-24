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
var TableActionComponent = (function () {
    function TableActionComponent() {
        this.deleteFlag = false;
        this.modalFlag = false;
        this.converterFlag = false;
        this.detailFlag = true;
        this.detail = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.convert = new core_1.EventEmitter();
    }
    TableActionComponent.prototype.detailEvent = function () {
        this.detail.emit();
    };
    TableActionComponent.prototype.deleteEvent = function () {
        this.delete.emit();
    };
    TableActionComponent.prototype.selectEvent = function () {
        this.select.emit();
    };
    TableActionComponent.prototype.convertEvent = function () {
        this.convert.emit();
    };
    return TableActionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TableActionComponent.prototype, "deleteFlag", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TableActionComponent.prototype, "modalFlag", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TableActionComponent.prototype, "converterFlag", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TableActionComponent.prototype, "detailFlag", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableActionComponent.prototype, "detail", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableActionComponent.prototype, "delete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableActionComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableActionComponent.prototype, "convert", void 0);
TableActionComponent = __decorate([
    core_1.Component({
        selector: 'table-action-component',
        template: " \n    <ul class=\"actions\">\n        <li *ngIf=\"detailFlag\"><a style=\"cursor: pointer\" (click)=\"detailEvent()\"><i class=\"zmdi zmdi-edit\"></i></a></li>\n        <li *ngIf=\"deleteFlag\"><a style=\"cursor: pointer\" (click)=\"deleteEvent()\"><i class=\"zmdi zmdi-delete\"></i></a></li>\n        <li *ngIf=\"modalFlag\"><a style=\"cursor: pointer\" (click)=\"selectEvent()\" data-dismiss=\"modal\"><i class=\"zmdi zmdi-download\"></i></a></li>\n        <li *ngIf=\"converterFlag\"><a style=\"cursor: pointer\" (click)=\"convertEvent()\" data-toggle=\"modal\" href=\"#modalWider\"><i class=\"zmdi zmdi-swap-alt\"></i></a></li>\n    </ul>\n  "
    })
], TableActionComponent);
exports.TableActionComponent = TableActionComponent;
//# sourceMappingURL=action.component.js.map