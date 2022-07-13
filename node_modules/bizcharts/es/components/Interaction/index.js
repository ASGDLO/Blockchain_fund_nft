import { useLayoutEffect } from 'react';
import useChart from '../../hooks/useChartView';
export default function Interaction(props) {
    var chart = useChart();
    var type = props.type, config = props.config;
    // @ts-ignore
    useLayoutEffect(function () {
        chart.interaction(type, config);
        return function () {
            chart.removeInteraction(type);
        };
    });
    return null;
}
//# sourceMappingURL=index.js.map