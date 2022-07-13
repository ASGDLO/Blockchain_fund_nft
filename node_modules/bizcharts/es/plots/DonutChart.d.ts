import 'react';
import { PieOptions as Options } from '@antv/g2plot/lib/plots/pie';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface DonutOptions extends Options, BasePlotOptions {
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
}
export { DonutOptions };
declare const _default: import("react").ForwardRefExoticComponent<DonutOptions & import("react").RefAttributes<any>>;
export default _default;
