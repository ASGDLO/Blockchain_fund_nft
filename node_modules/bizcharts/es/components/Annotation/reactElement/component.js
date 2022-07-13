import HtmlAnnotation from '@antv/component/lib/annotation/html';
import { clearDom } from '@antv/component/lib/util/util';
import ReactDom from 'react-dom';
import React from 'react';
import { isElement, isEqual, isFunction, isString } from '@antv/util';
import { createDom } from '@antv/g2/lib/util/dom';
// todo: @antv/component 支持register
HtmlAnnotation.prototype.render = function () {
    if (this.get('isReactElement')) {
        var container = this.getContainer();
        var content = this.get('content');
        var refreshDeps = this.get('refreshDeps');
        var rst = React.isValidElement(content) ? content : content(container);
        if (this.preRefreshDeps === undefined || !isEqual(this.preRefreshDeps, refreshDeps)) {
            ReactDom.render(rst, container);
            this.preRefreshDeps = refreshDeps;
        }
    }
    else {
        var container = this.getContainer();
        var html = this.get('html');
        clearDom(container);
        var rst = isFunction(html) ? html(container) : html;
        if (isElement(rst)) {
            container.appendChild(rst);
        }
        else if (isString(rst)) {
            container.appendChild(createDom(rst));
        }
    }
    this.resetPosition();
};
//# sourceMappingURL=component.js.map