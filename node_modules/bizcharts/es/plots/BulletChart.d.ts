import 'react';
import { BulletOptions as Options } from '@antv/g2plot/lib/plots/bullet';
import { BasePlotOptions } from '../createPlot';
export interface BulletOptions extends Options, BasePlotOptions {
    /**
     * 该属性已废弃，请使用size.measure替代
     * @example
     * size={{
     *   measure: 20,
     * }}
     */
    measureSize?: number | [number, number] | ((datum: any) => number);
    /**
     * 该属性已废弃，请使用size.range替代
     * @example
     * size={{
     *   range: 50,
     * }}
     */
    rangeSize?: number | [number, number] | ((datum: any) => number);
    /**
     * 该属性已废弃，请使用size.target替代
     * @example
     * size={{
     *   target: 40,
     * }}
     */
    markerSize?: number | [number, number] | ((datum: any) => number);
    /**
     * 该属性已废弃，请使用color.measure替代
     * @example
     * color={{
     *   measure: ['#d62728', '#2ca02c', '#000000'],
     * }}
     */
    measureColors?: any;
    /**
     * 该属性已废弃，请使用color.range替代
     * @example
     * color={{
     *   range: ['#d62728', '#2ca02c', '#000000'],
     * }}
     */
    rangeColors?: any;
    /**
     * 该属性已废弃，请使用color.target替代
     * @example
     * color={{
     *   target: ['#d62728', '#2ca02c', '#000000'],
     * }}
     */
    markerColors?: any;
    /**
     * 该属性已废弃，请使用bulletStyle.target替代
     * @example
     * bulletStyle={{
     *   target: {
     *     fill: 'red'
     *   },
     *   range: {}
     * }}
     */
    markerStyle?: any;
    /**
     * 该属性已废弃，请在数据中配置range，并配置rangeField
     *
     * @type {number}
     * @memberof BulletOptions
     */
    rangeMax?: number;
}
declare const _default: import("react").ForwardRefExoticComponent<BulletOptions & import("react").RefAttributes<any>>;
export default _default;
