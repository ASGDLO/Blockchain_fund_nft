import 'react';
import { HeatmapOptions as Options } from '@antv/g2plot/lib/plots/heatmap';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface HeatmapOptions extends Options, BasePlotOptions {
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
    /** 该属性是g2plot@1.0的属性，即将废弃，请使用 `heatmapStyle` 替代 */
    shapeType?: any;
}
export { HeatmapOptions };
declare const _default: import("react").ForwardRefExoticComponent<HeatmapOptions & import("react").RefAttributes<any>>;
export default _default;
