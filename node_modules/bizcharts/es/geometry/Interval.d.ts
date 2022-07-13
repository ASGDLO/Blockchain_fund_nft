import BaseGemo, { IBaseGemoProps } from './Base';
import '@antv/g2/lib/geometry/shape/interval/funnel';
import '@antv/g2/lib/geometry/shape/interval/hollow-rect';
import '@antv/g2/lib/geometry/shape/interval/line';
import '@antv/g2/lib/geometry/shape/interval/pyramid';
import '@antv/g2/lib/geometry/shape/interval/tick';
export interface IIntervalGemoProps extends IBaseGemoProps {
}
export default class IntervalGeom extends BaseGemo<IIntervalGemoProps> {
    interactionTypes: string[];
    GemoBaseClassName: string;
}
