import { isNumber } from "@antv/util";
export default function getElementSize(ele, ctlSize) {
    if (ctlSize === void 0) { ctlSize = {}; }
    return {
        width: isNumber(ctlSize.width) ? ctlSize.width : ele.clientWidth,
        height: isNumber(ctlSize.height) ? ctlSize.height : ele.clientHeight,
    };
}
//# sourceMappingURL=getElementSize.js.map