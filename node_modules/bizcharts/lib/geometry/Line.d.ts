import '@antv/g2/lib/geometry/shape/line/step';
import BaseGemo, { IBaseGemoProps } from './Base';
import '@antv/g2/lib/geometry/shape/line/step';
export interface ILineGemoProps extends IBaseGemoProps {
}
export default class LineGeom extends BaseGemo<ILineGemoProps> {
    GemoBaseClassName: string;
}
