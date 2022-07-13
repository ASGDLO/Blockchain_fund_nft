import React from 'react';
import Helper from './Helper';
export * from './Helper';
declare class Base<T> extends React.Component<T> {
    helper: Helper;
    componentWillUnmount(): void;
    getInstance(): any;
    render(): any;
}
export default Base;
