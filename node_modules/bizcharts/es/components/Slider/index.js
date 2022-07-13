import 'react';
import _Slider from '@antv/g2/lib/chart/controller/slider';
import { registerComponentController } from '@antv/g2/lib/core';
import useChartView from '../../hooks/useChartView';
// 引入 slider 组件
registerComponentController('slider', _Slider);
function Slider(props) {
    var view = useChartView();
    view.option('slider', props);
    return null;
}
export default Slider;
//# sourceMappingURL=index.js.map