import BaseGemo, { IBaseGemoProps } from './Base';
export interface IHeatmapGemoProps extends IBaseGemoProps {
}
export default class HeatmapGeom extends BaseGemo<IHeatmapGemoProps> {
    GemoBaseClassName: string;
}
