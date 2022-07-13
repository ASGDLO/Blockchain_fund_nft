import 'react';
import { WordCloudOptions } from '@antv/g2plot/lib/plots/word-cloud';
import { BasePlotOptions } from '../createPlot';
import { TooltipAPIOptions } from './core/interface';
import { ShapeStyle } from '@antv/g2plot/lib/types/attr';
import { WordStyle } from '@antv/g2plot/lib/plots/word-cloud/types';
interface WordStylePolyfill extends WordStyle {
    active?: ShapeStyle;
}
export interface WordCloudCfg extends Partial<WordCloudOptions>, Omit<BasePlotOptions, 'events'> {
    tooltip?: TooltipAPIOptions;
    wordStyle?: WordStylePolyfill;
    maskImage?: string;
    shuffle?: boolean;
    selected?: number;
    events?: {
        onWordCloudHover?: (item: any, dim: any, e: any) => void;
        onWordCloudClick?: (item: any, dim: any, e: any) => void;
    };
}
declare const _default: import("react").ForwardRefExoticComponent<WordCloudCfg & import("react").RefAttributes<any>>;
export default _default;
