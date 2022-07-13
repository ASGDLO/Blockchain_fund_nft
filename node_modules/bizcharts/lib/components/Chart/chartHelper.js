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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var unique_id_1 = __importDefault(require("@antv/util/lib/unique-id"));
var each_1 = __importDefault(require("@antv/util/lib/each"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var is_array_1 = __importDefault(require("@antv/util/lib/is-array"));
var is_equal_1 = __importDefault(require("@antv/util/lib/is-equal"));
var core_1 = require("../../core");
var warning_1 = __importDefault(require("warning"));
var shallowEqual_1 = __importDefault(require("../../utils/shallowEqual"));
var pickWithout_1 = __importDefault(require("../../utils/pickWithout"));
var cloneDeep_1 = __importDefault(require("../../utils/cloneDeep"));
var constant_1 = require("../../utils/constant");
var constant_2 = require("@antv/g2/lib/constant");
var event_emitter_1 = __importDefault(require("@antv/event-emitter"));
var events_1 = require("./events");
var processData = function (data) {
    if (data && data.rows) {
        return data.rows;
    }
    return data;
};
var ChartHelper = /** @class */ (function (_super) {
    __extends(ChartHelper, _super);
    function ChartHelper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {};
        return _this;
    }
    ChartHelper.prototype.createInstance = function (config) {
        this.chart = new core_1.Chart(__assign({}, config));
        this.key = unique_id_1.default('bx-chart');
        this.chart.emit('initialed');
        this.isNewInstance = true; // 更新了实例的标记
        this.extendGroup = {
            isChartCanvas: true,
            chart: this.chart,
        };
    };
    ChartHelper.prototype.render = function () {
        if (!this.chart) {
            return;
        }
        try {
            // 普通error 只能兜住react render周期里的error。 chart render周期的error 要单独处理
            if (this.isNewInstance) {
                this.chart.render();
                this.onGetG2Instance();
                // @ts-ignore
                this.chart.unbindAutoFit(); // 不使用g2的监听
                this.isNewInstance = false;
                // @ts-ignore
            }
            else if (this.chart.forceReRender) {
                // forceReRender 填部分g2更新不干净的坑
                this.chart.render();
            }
            else {
                this.chart.render(true);
            }
            // 处理elements状态
            this.chart.emit('processElemens');
        }
        catch (e) {
            this.emit('renderError', e);
            this.destory();
            if (console) {
                console.error(e === null || e === void 0 ? void 0 : e.stack);
            }
        }
    };
    ChartHelper.prototype.onGetG2Instance = function () {
        // 当且仅当 isNewInstance 的时候执行。
        if (is_function_1.default(this.config.onGetG2Instance)) {
            this.config.onGetG2Instance(this.chart);
        }
    };
    ChartHelper.prototype.shouldReCreateInstance = function (newConfig) {
        // 如果上一个实例数据为空则直接销毁重建，以免影响动画
        if (!this.chart || newConfig.forceUpdate) {
            return true;
        }
        var _a = this.config, preData = _a.data, preOptions = __rest(_a, ["data"]);
        var data = newConfig.data, options = __rest(newConfig, ["data"]);
        if (is_array_1.default(this.config.data)
            && preData.length === 0
            && is_array_1.default(data)
            && data.length !== 0) {
            return true;
        }
        // scale 切换不需要重建实例
        var unCompareProps = __spreadArrays(constant_1.REACT_PIVATE_PROPS, ['scale', 'width', 'height', 'container', '_container', '_interactions', 'placeholder', /^on/, /^\_on/]);
        if (!is_equal_1.default(pickWithout_1.default(preOptions, __spreadArrays(unCompareProps)), pickWithout_1.default(options, __spreadArrays(unCompareProps)))) {
            return true;
        }
        return false;
    };
    ChartHelper.prototype.update = function (props) {
        var _this = this;
        var newConfig = cloneDeep_1.default(this.adapterOptions(props));
        if (this.shouldReCreateInstance(newConfig)) {
            this.destory();
            this.createInstance(newConfig);
        }
        // 重置
        if (newConfig.pure) {
            // 纯画布 关闭
            this.chart.axis(false);
            this.chart.tooltip(false);
            this.chart.legend(false);
            // @ts-ignore
            this.chart.isPure = true;
        }
        // 事件
        var events = events_1.pickEventName(this.config);
        var newEvents = events_1.pickEventName(newConfig);
        // 配置
        var data = newConfig.data, interactions = newConfig.interactions, options = __rest(newConfig, ["data", "interactions"]);
        var _a = this.config, preData = _a.data, _b = _a.interactions, preInteractions = _b === void 0 ? [] : _b;
        if (!this.isNewInstance) {
            // 取消事件绑定
            events.forEach(function (ev) {
                _this.chart.off(ev[1], _this.config["_" + ev[0]]);
            });
        }
        /** 更新 */
        // 绑定事件
        newEvents.forEach(function (evName) {
            newConfig["_" + evName[0]] = function (ev) {
                // 输入chart实例方便用户使用
                newConfig[evName[0]](ev, _this.chart);
            };
            _this.chart.on(evName[1], newConfig["_" + evName[0]]);
        });
        // 数据 更新
        if (is_array_1.default(preData) && preData.length) {
            // 数据只做2级浅比较
            // fixme: 做4级比较
            var isEqual_1 = true;
            if (newConfig.notCompareData) {
                // 手动关闭对比
                isEqual_1 = false;
            }
            if (preData.length !== data.length) {
                // 长度不相等
                isEqual_1 = false;
            }
            else {
                preData.forEach(function (element, index) {
                    if (!shallowEqual_1.default(element, data[index])) {
                        isEqual_1 = false;
                    }
                });
            }
            if (!isEqual_1) {
                // @ts-ignore
                this.chart.isDataChanged = true;
                this.chart.emit(constant_2.VIEW_LIFE_CIRCLE.BEFORE_CHANGE_DATA);
                // 1. 保存数据
                this.chart.data(data);
                // 2. 最后再渲染
                // 3. 遍历子 view 进行 change data
                var views = this.chart.views;
                for (var i = 0, len = views.length; i < len; i++) {
                    var view = views[i];
                    // 子 view 有自己的数据, 会在执行view的配置时会覆盖
                    view.changeData(data);
                }
                this.chart.emit(constant_2.VIEW_LIFE_CIRCLE.AFTER_CHANGE_DATA);
            }
        }
        else {
            this.chart.data(data);
        }
        // 比例尺
        this.chart.scale(options.scale);
        // 动画
        if (options.animate === false) {
            this.chart.animate(false);
        }
        else {
            this.chart.animate(true);
        }
        // 交互 interactions
        preInteractions.forEach(function (interact) {
            // 这里不做对比，无意义，都是要销毁重建，不如直接全量销毁
            _this.chart.removeInteraction(interact);
        });
        interactions.forEach(function (interact) {
            _this.chart.interaction(interact);
        });
        // filter
        each_1.default(this.config.filter, function (it, index) {
            // 销毁
            if (is_array_1.default(it)) {
                _this.chart.filter(it[0], null);
            }
            else {
                _this.chart.filter(index, null);
            }
        });
        each_1.default(newConfig.filter, function (it, index) {
            if (is_array_1.default(it)) {
                _this.chart.filter(it[0], it[1]);
            }
            else {
                _this.chart.filter(index, it);
            }
        });
        // 主题
        this.chart.theme(newConfig.theme);
        // 缓存处理后的配置
        this.config = newConfig;
    };
    ChartHelper.prototype.adapterOptions = function (_a) {
        var data = _a.data, others = __rest(_a, ["data"]);
        // 剔除 React 自身的属性
        var options = pickWithout_1.default(others, __spreadArrays(constant_1.REACT_PIVATE_PROPS));
        if (options.forceFit) {
            warning_1.default(false, 'forceFit 已废弃，请使用`autoFit`替代');
        }
        options.data = processData(data) || [];
        return options;
    };
    ChartHelper.prototype.destory = function () {
        if (!this.chart) {
            return;
        }
        this.extendGroup = null;
        var chart = this.chart;
        chart.destroy();
        chart = null;
        this.chart = null;
        this.config = {};
    };
    return ChartHelper;
}(event_emitter_1.default));
exports.default = ChartHelper;
//# sourceMappingURL=chartHelper.js.map