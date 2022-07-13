"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@antv/util");
function getElementSize(ele, ctlSize) {
    if (ctlSize === void 0) { ctlSize = {}; }
    return {
        width: util_1.isNumber(ctlSize.width) ? ctlSize.width : ele.clientWidth,
        height: util_1.isNumber(ctlSize.height) ? ctlSize.height : ele.clientHeight,
    };
}
exports.default = getElementSize;
//# sourceMappingURL=getElementSize.js.map