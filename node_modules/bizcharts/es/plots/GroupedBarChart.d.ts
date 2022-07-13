import 'react';
import { BarOptions as Options } from '@antv/g2plot/lib/plots/bar';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface GroupedBarOptions extends Options, BasePlotOptions {
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
    /** 条形的宽度，如设置该属性值，则宽度固定不自动调整 */
    barSize?: number;
}
export { GroupedBarOptions };
declare const _default: import("react").ForwardRefExoticComponent<GroupedBarOptions & import("react").RefAttributes<any>>;
export default _default;
