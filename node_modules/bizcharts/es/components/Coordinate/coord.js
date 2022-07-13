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
import React from 'react';
import warn from 'warning';
import Coordinate from './index';
export default function Coord(props) {
    warn(false, 'Coord (协调) 组件将重命名为更加语义化的组件名 Coordinate（坐标）,请使用Coordinate替代，我们将在5.0后删除Coord组件');
    return React.createElement(Coordinate, __assign({}, props));
}
//# sourceMappingURL=coord.js.map