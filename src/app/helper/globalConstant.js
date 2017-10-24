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
var globalIntercept_1 = require("../service/intercept/globalIntercept");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var GlobalConstant = (function () {
    function GlobalConstant(dataService) {
        var _this = this;
        this.EditMode = false;
        var config = dataService.getPageConfigbyCode("global");
        config.subscribe(function (data) {
            var temp = _this.generateArray(data);
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].type == "textformat") {
                    _this.text_format = temp[i].text1;
                }
            }
            console.log(_this.text_format);
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].type == "sitename") {
                    _this.text_site_name = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "styletable") {
                    _this.style_table = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "textbacktolist") {
                    _this.text_back_to_list = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "textbacktoviewmode") {
                    _this.text_back_to_view_mode = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "textcolor") {
                    _this.text_color_setting = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "textfooter") {
                    _this.text_footer = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "textnorecordfound") {
                    _this.text_no_record_found = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "textrequesttoedit") {
                    _this.text_request_to_edit = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "textsubmit") {
                    _this.text_submit = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "textupdate") {
                    _this.text_update = _this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
            }
        });
    }
    GlobalConstant.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    GlobalConstant.prototype.setEditMode = function (val) {
        this.EditMode = val;
        return this.EditMode;
    };
    return GlobalConstant;
}());
GlobalConstant = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [globalIntercept_1.globalIntercept])
], GlobalConstant);
exports.GlobalConstant = GlobalConstant;
//# sourceMappingURL=globalConstant.js.map