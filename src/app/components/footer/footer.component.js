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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FooterComponent.prototype, "textfooter", void 0);
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer-component',
        template: "\n    <footer id=\"footer\">\n        {{textfooter}}\n        <ul class=\"f-menu\">\n            <li><a href=\"\">Dashboard</a></li>\n            <li><a href=\"\">Profile</a></li>\n            <li><a href=\"\">Change Password</a></li>\n            <li><a href=\"\">Logout</a></li>\n        </ul>\n    </footer>\n  "
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map