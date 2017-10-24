"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunction = (function () {
    function GlobalFunction() {
    }
    GlobalFunction.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    return GlobalFunction;
}());
exports.GlobalFunction = GlobalFunction;
//# sourceMappingURL=globalFunction.js.map