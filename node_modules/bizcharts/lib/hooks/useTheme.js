"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var theme_1 = require("@antv/g2/lib/theme");
function useTheme(defaultThemeName) {
    if (defaultThemeName === void 0) { defaultThemeName = 'default'; }
    var defaultTheme = theme_1.getTheme(defaultThemeName);
    defaultTheme.name = defaultThemeName;
    var _a = react_1.useState(defaultTheme), theme = _a[0], setG2Theme = _a[1];
    var setTheme = function (themeName) {
        var nextTheme = theme_1.getTheme(themeName);
        nextTheme.name = themeName;
        setG2Theme(nextTheme);
    };
    return [theme, setTheme];
}
exports.default = useTheme;
//# sourceMappingURL=useTheme.js.map