import React from 'react';
import './reactElement/component';
import { AnnotationBaseOption } from '../../interface';
export interface IAnnotationBaseProps extends AnnotationBaseOption {
    chartIns?: any;
    [key: string]: any;
}
declare abstract class Annotation<PropsI> extends React.Component<PropsI, any> {
    static contextType: any;
    protected annotation: any;
    protected id: string;
    protected annotationType: string;
    protected index: number;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    getChartIns(): any;
    render(): JSX.Element;
}
export default Annotation;
