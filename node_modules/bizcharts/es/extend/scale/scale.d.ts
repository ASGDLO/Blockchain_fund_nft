import { Linear } from '@antv/scale';
/**
 * 线性度量
 * @class
 */
declare class LinearStrict extends Linear {
    [x: string]: any;
    constructor(props: any);
    initCfg(): void;
    calculateTicks(): any[];
}
export default LinearStrict;
