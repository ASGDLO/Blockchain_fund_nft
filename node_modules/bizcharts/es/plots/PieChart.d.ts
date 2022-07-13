import 'react';
import { PieOptions as Options } from '@antv/g2plot/lib/plots/pie';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface PieOptions extends Options, BasePlotOptions {
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
    legend?: LengendAPIOptions;
}
export { PieOptions };
declare const _default: import("react").ForwardRefExoticComponent<PieOptions & import("react").RefAttributes<any>>;
export default _default;
