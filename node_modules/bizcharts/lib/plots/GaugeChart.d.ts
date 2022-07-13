import 'react';
import { GaugeOptions as Options } from '@antv/g2plot/lib/plots/gauge';
import { Statistic } from '@antv/g2plot/lib/types';
import { BasePlotOptions } from '../createPlot';
interface GaugeOptions extends BasePlotOptions, Options {
    /** 该属性是g2Plot@1.0属性，即将废弃，请使用percent替代 */
    value?: number;
    statistic?: Statistic | Record<string, any>;
}
export { GaugeOptions };
declare const _default: import("react").ForwardRefExoticComponent<GaugeOptions & import("react").RefAttributes<any>>;
export default _default;
