import { useState } from 'react';
import { getTheme } from '@antv/g2/lib/theme';
export default function useTheme(defaultThemeName) {
    if (defaultThemeName === void 0) { defaultThemeName = 'default'; }
    var defaultTheme = getTheme(defaultThemeName);
    defaultTheme.name = defaultThemeName;
    var _a = useState(defaultTheme), theme = _a[0], setG2Theme = _a[1];
    var setTheme = function (themeName) {
        var nextTheme = getTheme(themeName);
        nextTheme.name = themeName;
        setG2Theme(nextTheme);
    };
    return [theme, setTheme];
}
//# sourceMappingURL=useTheme.js.map