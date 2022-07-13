import React from 'react';
import { Plot } from '@antv/g2plot/lib/core/plot';
interface VisibleText {
    visible?: boolean;
    text: string;
}
interface BasePlotOptions {
    /**
     * 获取g2Plot实例的勾子函数
     */
    onGetG2Instance?: (chart: Plot<any>) => void;
    errorContent?: React.ReactNode;
    /**
     * 图表事件
     */
    events?: Record<string, Function>;
    /**
     * 图表标题。如需绑定事件请直接使用ReactNode。
     */
    readonly title?: React.ReactNode | VisibleText;
    /**
     * 图表副标题。如需绑定事件请直接使用ReactNode。
     */
    readonly description?: React.ReactNode | VisibleText;
    /**
     * 请使用autoFit替代forceFit
     */
    forceFit?: boolean;
    /**
     * 是否是物料组件，因搭建引擎消费ref和原来的组件吐的react实例不兼容。
     * 该属性会影响ref的消费，为ali-lowcode-engine消费而生。
     */
    isMaterial?: boolean;
}
export { BasePlotOptions };
declare function createPlot<IPlotConfig extends Record<string, any>>(PlotClass: any, name: string, transCfg?: Function): React.ForwardRefExoticComponent<React.PropsWithoutRef<IPlotConfig> & React.RefAttributes<any>>;
export default createPlot;
