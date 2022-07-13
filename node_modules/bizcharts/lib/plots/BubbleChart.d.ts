import 'react';
import { ScatterOptions as Options } from '@antv/g2plot/lib/plots/scatter';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface BubbleOptions extends Options, BasePlotOptions {
    /** 该属性已废弃，请使用size替代 */
    pointSize?: any;
    /**
     * 该属性已废弃，请使用regressionLine替代,
     * 文档查看：https://g2plot.antv.vision/zh/examples/scatter/basic/#regressionLine
     */
    trendLine?: any;
    legend?: LengendAPIOptions;
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
}
export { BubbleOptions };
declare const _default: import("react").ForwardRefExoticComponent<BubbleOptions & import("react").RefAttributes<any>>;
export default _default;
