import React from 'react';
import { Chart } from '@antv/g2/lib/chart';
import { TooltipCfg } from '@antv/g2/lib/interface';
import './actions';
export interface ITooltip extends TooltipCfg, React.ComponentProps<any> {
    /** 图例是否可见 */
    visible?: boolean;
    /** 自定义Tooltip */
    children?: (title?: string, items?: any[], x?: number, y?: number) => {};
    [key: string]: any;
    /** 触发事件条件 */
    triggerOn?: 'hover' | 'click';
    /** Tooltip显示时 */
    onShow?: (e?: ITooltipEvent, chart?: Chart) => void;
    /** Tooltip改变时 */
    onChange?: (e?: ITooltipEvent, chart?: Chart) => void;
    /** Tooltip隐藏时 */
    onHide?: (e?: ITooltipEvent, chart?: Chart) => void;
}
export interface ITooltipEvent {
    items: any[];
    title: string;
    x: number;
    y: number;
}
declare function Tooltip(props: ITooltip): JSX.Element;
declare namespace Tooltip {
    var defaultProps: {
        showMarkers: boolean;
        triggerOn: string;
    };
}
export default Tooltip;
