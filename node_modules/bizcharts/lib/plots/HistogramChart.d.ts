import 'react';
import { HistogramOptions as Options } from '@antv/g2plot/lib/plots/histogram';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface HistogramOptions extends Options, BasePlotOptions {
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
}
export { HistogramOptions };
declare const _default: import("react").ForwardRefExoticComponent<HistogramOptions & import("react").RefAttributes<any>>;
export default _default;
