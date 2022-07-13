import 'react';
import { RoseOptions as Options } from '@antv/g2plot/lib/plots/rose';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface GroupedRoseOptions extends Options, BasePlotOptions {
    /** 请使用seriesField替代 */
    groupField?: string;
    /** 请使用xField替代 */
    categoryField?: string;
    /** 请使用yFeild替代 */
    radiusField?: string;
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
}
export { GroupedRoseOptions };
declare const _default: import("react").ForwardRefExoticComponent<GroupedRoseOptions & import("react").RefAttributes<any>>;
export default _default;
