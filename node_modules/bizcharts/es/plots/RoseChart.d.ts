import 'react';
import { RoseOptions as Options } from '@antv/g2plot/lib/plots/rose';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface RoseOptions extends Options, BasePlotOptions {
    /** 请使用seriesField替代 */
    colorField?: string;
    /** 请使用xField替代 */
    categoryField?: string;
    /** 请使用yFeild替代 */
    radiusField?: string;
    legend?: LengendAPIOptions;
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
}
export { RoseOptions };
declare const _default: import("react").ForwardRefExoticComponent<RoseOptions & import("react").RefAttributes<any>>;
export default _default;
