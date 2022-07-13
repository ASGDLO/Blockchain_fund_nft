import 'react';
import { ColumnOptions as Options } from '@antv/g2plot/lib/plots/column';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface ColumnOptions extends Options, BasePlotOptions {
    /** 请使用seriesField替代 */
    colorField?: string;
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
    /** 旧版api，即将废弃 请使用seriesField替代 */
    stackField?: string;
}
export { ColumnOptions };
export declare const polyfill: (props: any) => any;
declare const _default: import("react").ForwardRefExoticComponent<ColumnOptions & import("react").RefAttributes<any>>;
export default _default;
