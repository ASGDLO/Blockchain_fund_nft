import 'react';
import { TreemapOptions as Options } from '@antv/g2plot/lib/plots/treemap';
import { BasePlotOptions } from '../createPlot';
import { TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface TreemapOptions extends Options, BasePlotOptions {
    /** maxLevel 旧版g2Plot api，即将废弃请查看最新文档 */
    maxLevel?: number;
    tooltip?: TooltipAPIOptions;
    label?: LabelAPIOptions;
}
export { TreemapOptions };
declare const _default: import("react").ForwardRefExoticComponent<TreemapOptions & import("react").RefAttributes<any>>;
export default _default;
