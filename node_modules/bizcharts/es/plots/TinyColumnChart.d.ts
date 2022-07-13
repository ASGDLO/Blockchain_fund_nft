import 'react';
import { TinyColumnOptions as Options } from '@antv/g2plot/lib/plots/tiny-column';
import { BasePlotOptions } from '../createPlot';
declare type Opt = Omit<Options, 'data'>;
interface TinyColumnOptions extends Opt, BasePlotOptions {
    /** colorField 旧版g2Plot api，即将废弃请查看最新文档 */
    colorField?: string;
    data: number[] | Record<string, any>[];
    /** xField 旧版g2Plot api，即将废弃请查看最新文档 */
    xField?: string;
    /** yField 旧版g2Plot api，即将废弃请查看最新文档 */
    yField?: string;
    /** guideLine 旧版g2Plot api，即将废弃请查看最新文档 */
    guideLine?: Array<object>;
}
export { TinyColumnOptions };
declare const _default: import("react").ForwardRefExoticComponent<TinyColumnOptions & import("react").RefAttributes<any>>;
export default _default;
