import 'react';
import { ProgressOptions as Options } from '@antv/g2plot/lib/plots/progress';
import { BasePlotOptions } from '../createPlot';
interface ProgressOptions extends BasePlotOptions, Options {
}
export { ProgressOptions };
declare const _default: import("react").ForwardRefExoticComponent<ProgressOptions & import("react").RefAttributes<any>>;
export default _default;
