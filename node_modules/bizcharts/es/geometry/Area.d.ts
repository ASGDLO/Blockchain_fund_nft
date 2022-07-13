import BaseGemo, { IBaseGemoProps } from './Base';
import '@antv/g2/lib/geometry/shape/area';
export interface IAreaGemoProps extends IBaseGemoProps {
}
export default class AreaGeom extends BaseGemo<IAreaGemoProps> {
    GemoBaseClassName: string;
}
