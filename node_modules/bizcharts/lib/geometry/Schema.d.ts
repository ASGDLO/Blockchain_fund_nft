import BaseGemo, { IBaseGemoProps } from './Base';
import '@antv/g2/lib/geometry/shape/schema';
import '@antv/g2/lib/geometry/shape/schema/candle';
import '@antv/g2/lib/geometry/shape/schema/box';
export interface ISchemaGemoProps extends IBaseGemoProps {
}
export default class SchemaGeom extends BaseGemo<ISchemaGemoProps> {
    GemoBaseClassName: string;
}
