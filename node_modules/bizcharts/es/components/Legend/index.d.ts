import { LegendCfg, FilterCondition } from '@antv/g2/lib/interface';
import { Chart } from '@antv/g2/lib/chart';
import { IEvent } from '../../interface';
import './actions';
export interface ILegend extends LegendCfg {
    /** 图例的对应到数据源中的数据字段名，不传则默认设置所有图例。 */
    name?: string;
    /** 图例是否可见 */
    visible?: boolean;
    /** 筛选 */
    filter?: FilterCondition;
    /** 连续图例值改变时 or 分类图例点击图例时 */
    onChange?: (e?: IEvent, chart?: Chart) => void;
    /** 来自父级的 chart 或者 view实例 */
    view?: any;
    [key: string]: any;
}
export default function Legend(props: ILegend): any;
