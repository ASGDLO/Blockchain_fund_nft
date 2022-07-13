"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_reconciler_1 = __importDefault(require("react-reconciler"));
var react_1 = __importDefault(require("react"));
var group_1 = __importDefault(require("../../context/group"));
var emptyObject = {};
// 渲染的组件为封装组件，不需要渲染
var HostConfig = {
    getRootHostContext: function () { },
    getChildHostContext: function () { },
    createInstance: function () { },
    finalizeInitialChildren: function () {
        return false;
    },
    hideTextInstance: function () { },
    getPublicInstance: function (instance) {
        return instance;
    },
    hideInstance: function () { },
    unhideInstance: function () { },
    createTextInstance: function () { },
    prepareUpdate: function () {
        return emptyObject;
    },
    shouldDeprioritizeSubtree: function () {
        return false;
    },
    appendInitialChild: function () { },
    appendChildToContainer: function () { },
    removeChildFromContainer: function () { },
    prepareForCommit: function () { },
    resetAfterCommit: function () { },
    // 是否需要设置文字内容
    shouldSetTextContent: function () {
        return false;
    },
    supportsMutation: true,
    appendChild: function () { },
};
var Renderer = react_reconciler_1.default(HostConfig);
var LegacyRoot = 0;
var withContext = function (element, container) {
    return (react_1.default.createElement(group_1.default.Provider, { value: container },
        react_1.default.createElement(react_1.default.Fragment, null, element)));
};
var ReactG = {
    render: function (element, container) {
        if (container.clear) {
            container.clear();
        }
        var root = Renderer.createContainer(container, LegacyRoot, false);
        Renderer.updateContainer(withContext(element, container), root, null, function () { return undefined; });
        return Renderer.getPublicRootInstance(root);
    }
};
exports.default = ReactG;
//# sourceMappingURL=index.js.map