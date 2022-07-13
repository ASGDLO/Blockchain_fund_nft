import 'react';
import { LineOptions } from './LineChart';
interface StepLineOptions extends LineOptions {
    step?: 'hv' | 'vh' | 'vhv' | 'hvh';
}
export { StepLineOptions };
declare const _default: import("react").ForwardRefExoticComponent<StepLineOptions & import("react").RefAttributes<any>>;
export default _default;
