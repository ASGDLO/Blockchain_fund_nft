import BaseGemo, { IBaseGemoProps } from './Base';
import '@antv/g2/lib/geometry/shape/edge';
export interface IEdgeGemoProps extends IBaseGemoProps {
}
export default class EdgeGeom extends BaseGemo<IEdgeGemoProps> {
    GemoBaseClassName: string;
}
