var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Base from './base';
var Arc = /** @class */ (function (_super) {
    __extends(Arc, _super);
    function Arc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.annotationType = 'arc';
        return _this;
    }
    return Arc;
}(Base));
export default Arc;
;
//# sourceMappingURL=arc.js.map