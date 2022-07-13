import 'react';
import { LineOptions as Options } from '@antv/g2plot/lib/plots/line';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
declare type Opt = Omit<Options, 'point'>;
interface LineOptions extends Opt, BasePlotOptions {
    legend?: LengendAPIOptions;
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
    point?: Options['point'] | boolean;
}
export declare const polyfill: (opt: LineOptions) => LineOptions;
export { LineOptions };
declare const _default: import("react").ForwardRefExoticComponent<LineOptions & import("react").RefAttributes<any>>;
export default _default;
