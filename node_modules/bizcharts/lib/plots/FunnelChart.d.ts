import 'react';
import { FunnelOptions as Options } from '@antv/g2plot/lib/plots/funnel';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface FunnelOptions extends Options, BasePlotOptions {
    /** g2Plot@1.0的api，即将废弃，请使用isTransposed替代 */
    transpose?: boolean;
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
}
export { FunnelOptions };
declare const _default: import("react").ForwardRefExoticComponent<FunnelOptions & import("react").RefAttributes<any>>;
export default _default;
