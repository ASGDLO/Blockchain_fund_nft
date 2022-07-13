import React from 'react';
import Geometry from '@antv/g2/lib/geometry/base';
import { IBaseGemoProps } from '../interface';
import './Label';
import './actions';
export { IBaseGemoProps };
declare class GeomHelper {
    view: any;
    rootChart: any;
    geom: Geometry;
    config: Record<string, any>;
    GemoBaseClassName: string;
    interactionTypes: string[];
    setView(view: any): void;
    createGeomInstance(GemoBaseClassName: any, cfg: any): void;
    update(newConfig: any, component: any): void;
    destroy(): void;
}
declare abstract class BaseGeom<T extends IBaseGemoProps> extends React.Component<T> {
    geomHelper: GeomHelper;
    protected interactionTypes: string[];
    constructor(props: any);
    componentWillUnmount(): void;
    protected abstract readonly GemoBaseClassName: string;
    render(): JSX.Element;
}
export default BaseGeom;
