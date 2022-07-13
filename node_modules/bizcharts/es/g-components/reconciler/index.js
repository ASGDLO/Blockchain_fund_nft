import Reconciler from 'react-reconciler';
import React from 'react';
import GroupContext from '../../context/group';
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
var Renderer = Reconciler(HostConfig);
var LegacyRoot = 0;
var withContext = function (element, container) {
    return (React.createElement(GroupContext.Provider, { value: container },
        React.createElement(React.Fragment, null, element)));
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
export default ReactG;
//# sourceMappingURL=index.js.map