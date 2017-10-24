"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var EditHelper = (function () {
    function EditHelper(globalConstant, route, router, dataService) {
        this.globalConstant = globalConstant;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.field = [];
        this.text_back_to_list = globalConstant.text_back_to_list;
        this.text_request_to_edit = globalConstant.text_request_to_edit;
        this.text_back_to_view_mode = globalConstant.text_back_to_view_mode;
        this.text_submit = globalConstant.text_submit;
        this.text_update = globalConstant.text_update;
    }
    EditHelper.prototype.generateConfig = function (code) {
        var _this = this;
        var config = this.dataService.getPageConfigbyCode(code);
        config.subscribe(function (data) {
            var temp = _this.generateArray(data);
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].type == "modulename") {
                    _this.moduleName = _this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "pageparent") {
                    _this.pageParent = _this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "pagename") {
                    _this.pageName = _this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "pagedescription") {
                    _this.pageDescription = _this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
                else if (temp[i].type == "field") {
                    _this.field = _this.globalConstant.text_format == 'en_US' ? temp[i].text1.split(",") : temp[i].text2.split(",");
                }
            }
        });
    };
    EditHelper.prototype.canDeactivate = function () {
        return false;
    };
    EditHelper.prototype.backToList = function (module) {
        this.router.navigate(['./site/' + module], { skipLocationChange: true });
    };
    EditHelper.prototype.editButtonClick = function (editMode) {
        this.editMode = this.globalConstant.setEditMode(!editMode);
    };
    EditHelper.prototype.replaceByName = function (data, field) {
        data = JSON.stringify(data);
        var out = JSON.parse(data.split('"' + field + '":').join('"display":'));
        return (out);
    };
    EditHelper.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    return EditHelper;
}());
exports.EditHelper = EditHelper;
//# sourceMappingURL=edit.helper.js.map