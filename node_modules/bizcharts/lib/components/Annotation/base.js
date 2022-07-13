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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./reactElement/component");
var annotation_1 = __importDefault(require("@antv/g2/lib/chart/controller/annotation"));
var _ = __importStar(require("@antv/util"));
var view_1 = __importDefault(require("../../context/view"));
var core_1 = require("../../core");
core_1.registerComponentController('annotation', annotation_1.default);
// 4.0之后称为Annotation，为了名字统一
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.annotationType = 'line'; // 默认为line类型的guide
        return _this;
    }
    Annotation.prototype.componentDidMount = function () {
        var chartIns = this.getChartIns();
        this.id = _.uniqueId('annotation');
        this.annotation = chartIns.annotation();
        // this.annotation[this.annotationType](this.props);
        if (this.annotationType === 'ReactElement') {
            this.annotation.annotation(__assign({ type: 'html', isReactElement: true }, this.props));
        }
        else {
            this.annotation.annotation(__assign({ type: this.annotationType }, this.props));
        }
        this.annotation.option[this.annotation.option.length - 1].__id = this.id;
    };
    Annotation.prototype.componentDidUpdate = function () {
        var _this = this;
        var index = null;
        this.annotation.option.forEach(function (item, i) {
            if (item.__id === _this.id) {
                index = i;
            }
        });
        if (this.annotationType === 'ReactElement') {
            this.annotation.option[index] = __assign(__assign({ type: 'html', isReactElement: true }, this.props), { __id: this.id });
        }
        else {
            this.annotation.option[index] = __assign(__assign({ type: this.annotationType }, this.props), { __id: this.id });
        }
    };
    Annotation.prototype.componentWillUnmount = function () {
        var _this = this;
        var index = null;
        if (!this.annotation) {
            return;
        }
        this.annotation.option.forEach(function (item, i) {
            if (item.__id === _this.id) {
                index = i;
            }
        });
        if (index !== null) {
            this.annotation.option.splice(index, 1);
        }
        this.annotation = null;
    };
    Annotation.prototype.getChartIns = function () {
        return this.context;
    };
    Annotation.prototype.render = function () {
        return react_1.default.createElement(react_1.default.Fragment, null);
    };
    return Annotation;
}(react_1.default.Component));
Annotation.contextType = view_1.default;
exports.default = Annotation;
//# sourceMappingURL=base.js.map