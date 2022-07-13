"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var interval_1 = __importDefault(require("@antv/g2/lib/geometry/interval"));
// import PropsTypes from 'prop-types';
var interval_2 = __importDefault(require("@antv/g2/lib/geometry/label/interval"));
var pie_1 = __importDefault(require("@antv/g2/lib/geometry/label/pie"));
var Base_1 = __importDefault(require("./Base"));
var core_1 = require("../core");
core_1.registerGeometry('Interval', interval_1.default);
core_1.registerGeometryLabel('interval', interval_2.default);
core_1.registerGeometryLabel('pie', pie_1.default);
require("@antv/g2/lib/geometry/shape/interval/funnel");
require("@antv/g2/lib/geometry/shape/interval/hollow-rect");
require("@antv/g2/lib/geometry/shape/interval/line");
require("@antv/g2/lib/geometry/shape/interval/pyramid");
require("@antv/g2/lib/geometry/shape/interval/tick");
// 出现背景框
core_1.registerInteraction('active-region', {
    start: [{ trigger: 'plot:mousemove', action: 'active-region:show' }],
    end: [{ trigger: 'plot:mouseleave', action: 'active-region:hide' }],
});
var IntervalGeom = /** @class */ (function (_super) {
    __extends(IntervalGeom, _super);
    function IntervalGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interactionTypes = ['active-region', 'element-highlight'];
        // static propsTypes = {
        //   'active-region': PropsTypes.bool,
        //   'element-highlight': PropsTypes.bool,
        // }
        // static defaultProps = {
        //   'active-region': true,
        //   'element-highlight': false,
        //   'position': 'x*y'
        // }
        _this.GemoBaseClassName = 'interval';
        return _this;
    }
    return IntervalGeom;
}(Base_1.default));
exports.default = IntervalGeom;
//# sourceMappingURL=Interval.js.map