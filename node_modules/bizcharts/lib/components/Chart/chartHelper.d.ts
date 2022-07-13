import { Chart as G2Chart } from '../../core';
import EventEmitter from '@antv/event-emitter';
declare class ChartHelper extends EventEmitter {
    chart: G2Chart;
    config: Record<string, any>;
    private isNewInstance;
    extendGroup: any;
    key: string;
    createInstance(config: any): void;
    render(): void;
    private onGetG2Instance;
    shouldReCreateInstance(newConfig: any): boolean;
    update(props: any): void;
    adapterOptions({ data, ...others }: {
        [x: string]: any;
        data: any;
    }): {
        [key: string]: any;
    };
    destory(): void;
}
export default ChartHelper;
