import { Chart } from '../interface';
export declare class Connector {
    id: string;
    protected type: string;
    protected cfg: Record<string, any>;
    constructor(type: any);
    chartMap: {};
    state: {};
    connect(id: any, chart: Chart, pointFinder?: Function): this;
    unConnect(id: any): void;
    destroy(): void;
}
declare const createTooltipConnector: () => Connector;
export declare const registerConnector: (cid: string, tid: string, chart: Chart | null, shared: any, pointFinder?: Function) => void;
export default createTooltipConnector;
