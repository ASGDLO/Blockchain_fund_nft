import 'react';
import { TinyLineOptions as Options } from '@antv/g2plot/lib/plots/tiny-line';
import { BasePlotOptions } from '../createPlot';
declare type Opt = Omit<Options, 'data'>;
interface TinyLineOptions extends Opt, BasePlotOptions {
    /** size 旧版g2Plot api，即将废弃请查看最新文档 */
    size?: number;
    data: number[] | Record<string, any>[];
    /** xField 旧版g2Plot api，即将废弃请查看最新文档 */
    xField?: string;
    /** yField 旧版g2Plot api，即将废弃请查看最新文档 */
    yField?: string;
    guideLine?: Array<object>;
}
export { TinyLineOptions };
declare const _default: import("react").ForwardRefExoticComponent<TinyLineOptions & import("react").RefAttributes<any>>;
export default _default;
