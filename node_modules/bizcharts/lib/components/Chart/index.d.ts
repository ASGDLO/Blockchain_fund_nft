import React from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import { IChartProps } from '../../interface';
export declare class Chart extends React.Component<IChartProps> {
    protected resizeObserver: ResizeObserver;
    private chartHelper;
    readonly isRootView = true;
    private resize;
    static defaultProps: {
        placeholder: boolean;
        visible: boolean;
        interactions: any[];
        filter: any[];
    };
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    getG2Instance(): import("@antv/g2/lib/chart/chart").default;
    isError: boolean;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<IChartProps, string | number> & React.RefAttributes<any>>;
export default _default;
