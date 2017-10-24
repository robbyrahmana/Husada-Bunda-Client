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
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    return NotificationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "type", void 0);
NotificationComponent = __decorate([
    core_1.Component({
        selector: "notification-component",
        template: "\n        <div class=\"alert alert-{{type}}\" role=\"alert\" *ngIf=\"value\">\n            <div class=\"media\">\n                <div class=\"pull-left\">\n                    <i style=\"font-size: 2em\" class=\"zmdi zmdi-block\"></i>\n                </div>\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\">{{value}}</h4>\n                    <div><small>Please contact your administrator if you not aware of this error</small></div>\n                </div>\n            </div>\n        </div>\n    "
    })
], NotificationComponent);
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map