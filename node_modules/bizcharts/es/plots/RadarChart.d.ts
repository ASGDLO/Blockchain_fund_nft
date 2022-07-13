import 'react';
import { RadarOptions as Options } from '@antv/g2plot/lib/plots/radar';
import { MappingOptions } from '@antv/g2plot/lib/adaptor/geometries/base';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface LineAPIOptions {
    visible?: boolean;
    size?: number;
    style?: Options['lineStyle'];
}
interface PointAPIOptions extends MappingOptions {
    visible?: boolean;
}
interface AreaAPIOptions extends MappingOptions {
    visible?: boolean;
}
interface RadarOptions extends Options, BasePlotOptions {
    /** 请使用xField替代 */
    angleField?: string;
    /** 请使用yFeild替代 */
    radiusField?: string;
    line?: LineAPIOptions;
    point?: PointAPIOptions;
    area?: AreaAPIOptions;
    legend?: LengendAPIOptions;
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
    /** 请使用xAxis替代 */
    angleAxis?: any;
    /** 请使用YAxis替代 */
    radiusAxis?: any;
}
export { RadarOptions };
declare const _default: import("react").ForwardRefExoticComponent<RadarOptions & import("react").RefAttributes<any>>;
export default _default;
