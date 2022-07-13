import 'react';
import { RingProgressOptions as Options } from '@antv/g2plot/lib/plots/ring-progress';
import { BasePlotOptions } from '../createPlot';
interface RingProgressOptions extends BasePlotOptions, Options {
}
export { RingProgressOptions };
declare const _default: import("react").ForwardRefExoticComponent<RingProgressOptions & import("react").RefAttributes<any>>;
export default _default;
