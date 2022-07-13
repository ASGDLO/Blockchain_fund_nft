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
exports.registerConnector = exports.Connector = void 0;
// todo: 图表联动方案
var register_1 = require("@antv/g2/lib/interaction/action/register");
var geometry_1 = __importDefault(require("@antv/g2/lib/interaction/action/component/tooltip/geometry"));
var util_1 = require("@antv/util");
var core_1 = require("../core");
var CONNECTOR_MAP = {};
var Connector = /** @class */ (function () {
    function Connector(type) {
        this.cfg = { shared: true };
        this.chartMap = {};
        this.state = {};
        this.id = util_1.uniqueId('bx-action');
        this.type = type || 'tooltip';
    }
    Connector.prototype.connect = function (id, chart, pointFinder) {
        this.chartMap[id] = { chart: chart, pointFinder: pointFinder };
        chart.interaction("connect-" + this.type + "-" + this.id);
        if (this.type === 'tooltip' && this.cfg.shared) {
            if (util_1.get(chart, ['options', 'tooltip', 'shared']) === undefined) {
                util_1.set(chart, ['options', 'tooltip', 'shared'], true);
            }
            ;
        }
        return this;
    };
    Connector.prototype.unConnect = function (id) {
        this.chartMap[id].chart.removeInteraction("connect-" + this.type + "-" + this.id);
        delete this.chartMap[id];
    };
    Connector.prototype.destroy = function () {
        register_1.unregisterAction("connect-" + this.type + "-" + this.id);
    };
    return Connector;
}());
exports.Connector = Connector;
// 关联图表何处触发tooltip
var createTooltipConnector = function () {
    var cm = new Connector('tooltip');
    core_1.registerAction("connect-tooltip-" + cm.id, /** @class */ (function (_super) {
        __extends(ConnectTooltip, _super);
        function ConnectTooltip() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.CM = cm;
            return _this;
        }
        ConnectTooltip.prototype.showTooltip = function (view, point) {
            var records = view.getTooltipItems(point) || point;
            util_1.forIn(this.CM.chartMap, function (item) {
                var chart = item.chart, pointFinder = item.pointFinder;
                if (chart.destroyed || !chart.visible) {
                    return;
                }
                if (pointFinder) {
                    var triggerPoint = pointFinder(records, chart);
                    // 如果没有返回值，则不联动
                    if (triggerPoint) {
                        chart.showTooltip(triggerPoint);
                    }
                    ;
                }
                else {
                    chart.showTooltip(point);
                }
            });
        };
        ConnectTooltip.prototype.hideTooltip = function () {
            util_1.forIn(this.CM.chartMap, function (_a) {
                var chart = _a.chart;
                return chart.hideTooltip();
            });
        };
        return ConnectTooltip;
    }(geometry_1.default)));
    core_1.registerInteraction("connect-tooltip-" + cm.id, {
        start: [{ trigger: 'plot:mousemove', action: "connect-tooltip-" + cm.id + ":show" }],
        end: [{ trigger: 'plot:mouseleave', action: "connect-tooltip-" + cm.id + ":hide" }],
    });
    return cm;
};
exports.registerConnector = function (cid, tid, chart, shared, pointFinder) {
    var connector = CONNECTOR_MAP[cid];
    // 销毁
    if (chart === null && connector) {
        connector.unConnect(tid);
        return;
    }
    // 创建 & 注册
    if (connector) {
        connector.connect(tid, chart, pointFinder);
    }
    else {
        CONNECTOR_MAP[cid] = createTooltipConnector();
        // shared false 是为了兼容饼图不支持shared的tooltip
        CONNECTOR_MAP[cid].cfg.shared = !!shared;
        CONNECTOR_MAP[cid].connect(tid, chart, pointFinder);
    }
};
exports.default = createTooltipConnector;
//# sourceMappingURL=createTooltipConnector.js.map