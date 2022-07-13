import 'react';
import { ColumnOptions } from '@antv/g2plot/lib/plots/column';
import { BasePlotOptions } from '../createPlot';
import { LengendAPIOptions, TooltipAPIOptions, LabelAPIOptions } from './core/interface';
interface GroupedColumnOptions extends ColumnOptions, BasePlotOptions {
    /** 图例 */
    legend?: LengendAPIOptions;
    /** 图表提示框 */
    tooltip?: TooltipAPIOptions;
    /** 数据标注label */
    label?: LabelAPIOptions;
    /** 柱子的宽度，如设置该属性值，则宽度固定不自动调整 */
    columnSize?: number;
}
export { GroupedColumnOptions };
declare const _default: import("react").ForwardRefExoticComponent<GroupedColumnOptions & import("react").RefAttributes<any>>;
export default _default;
