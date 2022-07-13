import BaseGemo, { IBaseGemoProps } from './Base';
import '@antv/g2/lib/geometry/shape/polygon';
import '@antv/g2/lib/geometry/shape/polygon/square';
export interface IPolygonGemoProps extends IBaseGemoProps {
}
export default class PolygonGeom extends BaseGemo<IPolygonGemoProps> {
    GemoBaseClassName: string;
}
