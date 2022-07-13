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
import React from 'react';
import _isString from '@antv/util/lib/is-string';
import _isFunction from '@antv/util/lib/is-function';
import GeometryLabel from '@antv/g2/lib/geometry/label/base';
import ChartViewContext from '../context/view';
import { registerGeometryLabel } from '../core';
import compareProps from '../utils/compareProps';
import warn from 'warning';
import './Label';
// 交互事件
import './actions';
import cloneDeep from '../utils/cloneDeep';
registerGeometryLabel('base', GeometryLabel);
var DEFAULT_SORT_GEOMETRYS = ['line', 'area'];
var GeomHelper = /** @class */ (function () {
    function GeomHelper() {
        this.config = {};
    }
    GeomHelper.prototype.setView = function (view) {
        this.view = view;
        this.rootChart = view.rootChart || view; // 顶层chart实例
    };
    GeomHelper.prototype.createGeomInstance = function (GemoBaseClassName, cfg) {
        this.geom = this.view[GemoBaseClassName](cfg);
        var sortable = cfg.sortable;
        // 复写原型
        // @ts-ignore
        this.geom.__beforeMapping = this.geom.beforeMapping;
        // @ts-ignore
        this.geom.beforeMapping = function (data) {
            var xScale = this.getXScale();
            if (sortable !== false && data && data[0] && DEFAULT_SORT_GEOMETRYS.includes(GemoBaseClassName) && ['time', 'timeCat'].includes(xScale.type)) {
                this.sort(data);
            }
            return this.__beforeMapping(data);
        };
        this.GemoBaseClassName = GemoBaseClassName;
    };
    GeomHelper.prototype.update = function (newConfig, component) {
        var _this = this;
        if (!this.geom) {
            this.setView(component.context);
            // 如果是时间类型则对数据排序
            this.createGeomInstance(component.GemoBaseClassName, newConfig);
            this.interactionTypes = component.interactionTypes;
        }
        compareProps(this.config, newConfig, ['position', 'shape', 'color', 'label', 'style', 'tooltip', 'size', 'animate', 'state', 'customInfo'], function (value, key) {
            var _a;
            // value 已被转为array
            warn(!(key === 'label' && value[0] === true), 'label 值类型错误，应为false | LabelOption | FieldString');
            (_a = _this.geom)[key].apply(_a, value);
        });
        compareProps(this.config, newConfig, ['adjust'], function (value, key) {
            if (_isString(value[0])) {
                _this.geom[key](value[0]);
            }
            else {
                _this.geom[key](value);
            }
        });
        // 状态设置
        this.geom.state(newConfig.state || {});
        // selected 和 active 使用 interacttion 替代
        // setElements 设置 selected 和 active 默认值
        this.rootChart.on('processElemens', function () {
            if (_isFunction(newConfig.setElements)) {
                newConfig.setElements(_this.geom.elements);
            }
        });
        // 交互
        // interaction 
        compareProps(this.config, newConfig, this.interactionTypes, function (value, key) {
            if (value[0]) {
                _this.rootChart.interaction(key);
            }
            else {
                _this.rootChart.removeInteraction(key);
            }
        });
        // 缓存
        this.config = cloneDeep(newConfig);
    };
    GeomHelper.prototype.destroy = function () {
        if (this.geom) {
            this.geom.destroy();
            this.geom = null;
        }
        this.config = {};
    };
    return GeomHelper;
}());
var BaseGeom = /** @class */ (function (_super) {
    __extends(BaseGeom, _super);
    function BaseGeom(props) {
        var _this = _super.call(this, props) || this;
        _this.interactionTypes = [];
        _this.geomHelper = new GeomHelper();
        return _this;
    }
    BaseGeom.prototype.componentWillUnmount = function () {
        this.geomHelper.destroy();
    };
    BaseGeom.prototype.render = function () {
        var _this = this;
        this.geomHelper.update(this.props, this);
        return React.createElement(React.Fragment, null, React.Children.map(this.props.children, function (ele) {
            return React.isValidElement(ele) ? React.cloneElement(ele, { parentInstance: _this.geomHelper.geom }) : React.createElement(React.Fragment, null);
        }));
    };
    return BaseGeom;
}(React.Component));
BaseGeom.contextType = ChartViewContext;
export default BaseGeom;
//# sourceMappingURL=Base.js.map