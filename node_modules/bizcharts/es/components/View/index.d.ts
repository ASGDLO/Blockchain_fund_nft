import React from 'react';
import { IViewProps } from '../../interface';
export declare class View extends React.Component<IViewProps> {
    name: string;
    private viewHelper;
    static defaultProps: {
        visible: boolean;
        preInteractions: any[];
        filter: any[];
    };
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default View;
