import 'react';
import { LiquidOptions as Options } from '@antv/g2plot/lib/plots/liquid';
import { BasePlotOptions } from '../createPlot';
declare type Opt = Omit<Options, 'percent'>;
interface LiquidOptions extends Opt, BasePlotOptions {
    /** 最小值，默认为0 */
    min?: number;
    /** 最小值，默认为1 */
    max?: number;
    /** value, 如果不是百分比的数据，使用旧版value的方式, 配合max最大值使用 */
    value?: number;
    /** 数据，百分比 */
    percent?: number;
}
export { LiquidOptions };
declare const _default: import("react").ForwardRefExoticComponent<LiquidOptions & import("react").RefAttributes<any>>;
export default _default;
