import 'react';
import { ScatterOptions as Options } from '@antv/g2plot/lib/plots/scatter';
import { RegressionLineOptions } from '@antv/g2plot/lib/plots/scatter/types';
import { StyleAttr } from '@antv/g2plot/lib/types/attr';
import { BasePlotOptions } from '../createPlot';
import { AxisAPIOptions, LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface TrendLineAPIOptions extends RegressionLineOptions {
    showConfidence?: boolean;
    confidenceStyle?: StyleAttr;
}
interface ScatterOptions extends Options, BasePlotOptions {
    legend?: LengendAPIOptions;
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
    trendLine?: Options['regressionLine'];
    xAxis?: AxisAPIOptions;
    yAxis?: AxisAPIOptions;
    pointSize?: Options['size'];
    size?: Options['size'];
    trendline?: TrendLineAPIOptions;
}
declare const _default: import("react").ForwardRefExoticComponent<ScatterOptions & import("react").RefAttributes<any>>;
export default _default;
