import 'react';
import { BarOptions as Options } from '@antv/g2plot/lib/plots/bar';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface BarOptions extends Options, BasePlotOptions {
    /** 请使用seriesField替代 */
    colorField?: any;
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
    /** 条形的宽度，如设置该属性值，则宽度固定不自动调整 */
    barSize?: number;
    /** 旧版api，即将废弃 请使用seriesField替代 */
    stackField?: string;
}
export declare const polyfill: (opt: BarOptions) => BarOptions;
export { BarOptions };
declare const _default: import("react").ForwardRefExoticComponent<BarOptions & import("react").RefAttributes<any>>;
export default _default;
