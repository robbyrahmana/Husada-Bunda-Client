"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var ListHelper = (function () {
    function ListHelper(globalConstant, router, dataService) {
        this.globalConstant = globalConstant;
        this.router = router;
        this.dataService = dataService;
        this.tableHeader = [];
        this.no_record_found = globalConstant.text_no_record_found;
        this.tableStyle = globalConstant.style_table;
    }
    ListHelper.prototype.add = function (module) {
        this.router.navigate(["./site/" + module + '/modify'], { skipLocationChange: true });
    };
    ListHelper.prototype.detail = function (module, data) {
        this.router.navigate(["./site/" + module + '/modify', data], { skipLocationChange: true });
    };
    ListHelper.prototype.generateConfig = function (code) {
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
                else if (temp[i].type == "tableheader") {
                    _this.tableHeader = _this.globalConstant.text_format == 'en_US' ? temp[i].text1.split(",") : temp[i].text2.split(",");
                }
            }
        });
    };
    ListHelper.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    return ListHelper;
}());
exports.ListHelper = ListHelper;
//# sourceMappingURL=list.helper.js.map