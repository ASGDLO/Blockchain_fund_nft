import 'react';
import { RoseOptions as Options } from '@antv/g2plot/lib/plots/rose';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface StackedRoseOptions extends Options, BasePlotOptions {
    /** 请使用seriesField替代 */
    stackField?: string;
    /** 请使用xField替代 */
    categoryField?: string;
    /** 请使用yFeild替代 */
    radiusField?: string;
    legend?: LengendAPIOptions;
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
}
export { StackedRoseOptions };
declare const _default: import("react").ForwardRefExoticComponent<StackedRoseOptions & import("react").RefAttributes<any>>;
export default _default;
