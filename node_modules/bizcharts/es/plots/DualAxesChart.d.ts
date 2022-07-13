import 'react';
import { DualAxes as Options } from '@antv/g2plot/lib/plots/dual-axes';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface DualAxesOptions extends Options, BasePlotOptions {
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
}
export { DualAxesOptions };
declare const _default: import("react").ForwardRefExoticComponent<DualAxesOptions & import("react").RefAttributes<any>>;
export default _default;
