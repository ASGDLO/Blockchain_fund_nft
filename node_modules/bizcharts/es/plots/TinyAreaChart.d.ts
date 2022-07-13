import 'react';
import { TinyAreaOptions as Options } from '@antv/g2plot/lib/plots/tiny-area';
import { BasePlotOptions } from '../createPlot';
declare type Opt = Omit<Options, 'data'>;
export interface TinyAreaOptions extends Opt, BasePlotOptions {
    data: number[] | Record<string, any>[];
    /** yField旧版g2Plot api，即将废弃请查看最新文档 */
    yField?: string;
    /** xField旧版g2Plot api，即将废弃请查看最新文档 */
    xField?: string;
}
declare const _default: import("react").ForwardRefExoticComponent<TinyAreaOptions & import("react").RefAttributes<any>>;
export default _default;
