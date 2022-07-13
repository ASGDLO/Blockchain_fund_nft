import 'react';
import { AreaOptions as Options } from '@antv/g2plot/lib/plots/area';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface AreaOptions extends Options, BasePlotOptions {
    legend?: LengendAPIOptions;
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
    /** 旧版api，即将废弃 请使用seriesField替代 */
    stackField?: string;
}
export declare const polyfill: (opt: AreaOptions) => AreaOptions;
export { AreaOptions };
declare const _default: import("react").ForwardRefExoticComponent<AreaOptions & import("react").RefAttributes<any>>;
export default _default;
