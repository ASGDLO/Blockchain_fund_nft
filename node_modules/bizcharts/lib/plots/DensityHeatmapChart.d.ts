import 'react';
import { HeatmapOptions } from '@antv/g2plot/lib/plots/heatmap';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface DensityHeatmapOptions extends HeatmapOptions, BasePlotOptions {
    /** g2Plot@1.0的api，即将废弃，请使用 `sizeRatio` 替代 */
    radius?: Record<string, any> | number;
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
}
export { DensityHeatmapOptions };
declare const _default: import("react").ForwardRefExoticComponent<DensityHeatmapOptions & import("react").RefAttributes<any>>;
export default _default;
