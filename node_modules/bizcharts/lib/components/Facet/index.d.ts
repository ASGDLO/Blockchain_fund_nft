import React from 'react';
import { FacetCfg, FacetTitle, Line } from '@antv/g2/lib/interface';
export interface IFacetProps extends FacetCfg<any>, React.PropsWithChildren<any> {
    type: 'circle' | 'rect' | 'mirror' | 'list' | 'matrix' | 'tree';
    /** 行标题的样式。 */
    columnTitle?: FacetTitle;
    /** 列标题的样式。 */
    rowTitle?: FacetTitle;
    /** 是否转置。 */
    transpose?: boolean;
    /** 标题样式。 */
    title?: FacetTitle;
    /** 指定每行可显示分面的个数，超出时会自动换行。 */
    cols?: number;
    line?: Line;
    /** 绘制每个分面 */
    eachView: (view: any, facet: any) => void;
}
declare function Facet(props: IFacetProps): any;
export default Facet;
