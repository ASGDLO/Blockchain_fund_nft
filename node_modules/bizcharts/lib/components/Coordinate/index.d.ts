import { CoordinateCfg, CoordinateActions } from '@antv/g2/lib/interface';
export interface ICoordinateProps extends CoordinateCfg {
    /** 坐标系类型 */
    type?: 'polar' | 'theta' | 'rect' | 'cartesian' | 'helix';
    /** 坐标系配置项，目前常用于极坐标。 */
    cfg?: CoordinateCfg;
    /**
     * 坐标系变换动作串行操作:
     * 1. rotate 表示旋转，使用弧度制。
     * 2. scale 表示沿着 x 和 y 方向的缩放比率。
     * 3. reflect 表示沿 x 方向镜像或者沿 y 轴方向映射。
     * 4. transpose 表示 x，y 轴置换。
     */
    actions?: CoordinateActions[];
    /** 是否转置。 */
    transpose?: boolean;
    /** 旋转，使用弧度制。 */
    rotate?: number;
    /** 表示沿着 x 和 y 方向的缩放比率。 */
    scale?: [number, number];
    /** 表示沿 x 方向镜像或者沿 y 轴方向映射。 */
    reflect?: 'x' | 'y';
}
export default function Coordinate(props: ICoordinateProps): any;
