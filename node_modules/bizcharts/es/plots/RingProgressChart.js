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
import 'react';
import { RingProgress } from '@antv/g2plot/lib/plots/ring-progress';
import createPlot from '../createPlot';
export default createPlot(RingProgress, 'RingProgressChart', function (opt) {
    // value 转为data，用于placeholder统一判断
    return __assign({ data: opt.percent, color: '#5B8FF9' }, opt);
});
//# sourceMappingURL=RingProgressChart.js.map