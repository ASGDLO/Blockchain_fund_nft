import 'react';
import { HeatmapOptions } from '@antv/g2plot/lib/plots/heatmap';
import { ColorAttr } from '@antv/g2plot/lib/types/attr';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
export interface CalendarOptions extends HeatmapOptions, BasePlotOptions {
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
    dateField?: string;
    /** valueField 是 g2@1.0的属性，即将废弃，请使用colorField替代 */
    valueField?: string;
    dateRange?: string[];
    /** colors 是 g2Plot@1.0 的属性，即将废弃， 请使用 color 属性替代 */
    colors?: ColorAttr;
}
declare const _default: import("react").ForwardRefExoticComponent<CalendarOptions & import("react").RefAttributes<any>>;
export default _default;
