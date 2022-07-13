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
import { withGroupContext } from '../context/group';
import Helper from './Base/Helper';
import Base from './Base';
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker(props) {
        var _this = _super.call(this, props) || this;
        _this.helper = new Helper('marker');
        return _this;
    }
    return Marker;
}(Base));
export default withGroupContext(Marker);
//# sourceMappingURL=Marker.js.map