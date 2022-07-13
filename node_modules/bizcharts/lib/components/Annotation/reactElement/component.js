"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __importDefault(require("@antv/component/lib/annotation/html"));
var util_1 = require("@antv/component/lib/util/util");
var react_dom_1 = __importDefault(require("react-dom"));
var react_1 = __importDefault(require("react"));
var util_2 = require("@antv/util");
var dom_1 = require("@antv/g2/lib/util/dom");
// todo: @antv/component 支持register
html_1.default.prototype.render = function () {
    if (this.get('isReactElement')) {
        var container = this.getContainer();
        var content = this.get('content');
        var refreshDeps = this.get('refreshDeps');
        var rst = react_1.default.isValidElement(content) ? content : content(container);
        if (this.preRefreshDeps === undefined || !util_2.isEqual(this.preRefreshDeps, refreshDeps)) {
            react_dom_1.default.render(rst, container);
            this.preRefreshDeps = refreshDeps;
        }
    }
    else {
        var container = this.getContainer();
        var html = this.get('html');
        util_1.clearDom(container);
        var rst = util_2.isFunction(html) ? html(container) : html;
        if (util_2.isElement(rst)) {
            container.appendChild(rst);
        }
        else if (util_2.isString(rst)) {
            container.appendChild(dom_1.createDom(rst));
        }
    }
    this.resetPosition();
};
//# sourceMappingURL=component.js.map