import 'react';
import { SliderCfg } from '@antv/g2/lib/interface';
interface TrendCfg {
    data: number[];
    smooth?: boolean;
    isArea?: boolean;
    backgroundStyle?: object;
    lineStyle?: object;
    areaStyle?: object;
}
export interface ISliderProps extends SliderCfg {
    height?: number;
    trendCfg?: TrendCfg;
    backgroundStyle?: any;
    foregroundStyle?: any;
    handlerStyle?: any;
    textStyle?: any;
    minLimit?: number;
    maxLimit?: number;
    start?: number;
    end?: number;
}
declare function Slider(props: ISliderProps): any;
export default Slider;
