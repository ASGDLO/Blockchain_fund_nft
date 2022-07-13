import BaseGemo, { IBaseGemoProps } from './Base';
export interface IPathGemoProps extends IBaseGemoProps {
}
export default class PathGeom extends BaseGemo<IPathGemoProps> {
    GemoBaseClassName: string;
}
