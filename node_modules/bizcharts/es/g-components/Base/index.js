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
export * from './Helper';
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base.prototype.componentWillUnmount = function () {
        this.helper.destroy();
    };
    Base.prototype.getInstance = function () {
        return this.helper.instance;
    };
    Base.prototype.render = function () {
        this.helper.update(this.props);
        return null;
    };
    return Base;
}(React.Component));
export default Base;
//# sourceMappingURL=index.js.map