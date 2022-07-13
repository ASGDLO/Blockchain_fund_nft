import BaseGemo, { IBaseGemoProps } from './Base';
import '@antv/g2/lib/geometry/shape/point/hollow';
import '@antv/g2/lib/geometry/shape/point/image';
import '@antv/g2/lib/geometry/shape/point/solid';
export interface IPointGemoProps extends IBaseGemoProps {
}
export default class PointGeom extends BaseGemo<IPointGemoProps> {
    GemoBaseClassName: string;
}
