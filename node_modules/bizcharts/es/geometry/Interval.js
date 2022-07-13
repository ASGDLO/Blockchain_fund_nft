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
import Interval from '@antv/g2/lib/geometry/interval';
// import PropsTypes from 'prop-types';
import IntervalLabel from '@antv/g2/lib/geometry/label/interval';
import PieLabel from '@antv/g2/lib/geometry/label/pie';
import BaseGemo from './Base';
import { registerGeometry, registerInteraction, registerGeometryLabel } from '../core';
registerGeometry('Interval', Interval);
registerGeometryLabel('interval', IntervalLabel);
registerGeometryLabel('pie', PieLabel);
import '@antv/g2/lib/geometry/shape/interval/funnel';
import '@antv/g2/lib/geometry/shape/interval/hollow-rect';
import '@antv/g2/lib/geometry/shape/interval/line';
import '@antv/g2/lib/geometry/shape/interval/pyramid';
import '@antv/g2/lib/geometry/shape/interval/tick';
// 出现背景框
registerInteraction('active-region', {
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
}(BaseGemo));
export default IntervalGeom;
//# sourceMappingURL=Interval.js.map