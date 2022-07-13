import React from 'react';
import _isFunction from '@antv/util/lib/is-function';
import useChart from '../../hooks/useChartInstance';
import warn from 'warning';
export default function Effects(props) {
    var chart = useChart();
    if (_isFunction(props.children)) {
        var res = props.children(chart);
        return React.isValidElement(res) ? res : null;
    }
    warn(false, 'Effects 的子组件应当是一个函数 (chart) => {}');
    return null;
}
//# sourceMappingURL=index.js.map