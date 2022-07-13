import G2View from '@antv/g2/lib/chart/view';
import G2Chart from '@antv/g2/lib/chart/chart';
export default class ViewHelper {
    config: Record<string, any>;
    view: G2View;
    readonly isRootView = false;
    chart: G2Chart;
    constructor(chart: any);
    creatViewInstance(options: any): void;
    getView(): G2View;
    update(newConfig: any): void;
    destroy(): void;
    processOptions(options: any): any;
}
