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
var DataRegion = /** @class */ (function (_super) {
    __extends(DataRegion, _super);
    function DataRegion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.annotationType = 'dataRegion';
        return _this;
    }
    return DataRegion;
}(Base));
export default DataRegion;
;
//# sourceMappingURL=dataRegion.js.map