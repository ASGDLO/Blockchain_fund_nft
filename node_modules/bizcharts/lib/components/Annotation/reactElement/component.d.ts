import { HtmlComponentCfg } from '@antv/component/lib/types';
import React from 'react';
/**
 * Html Annotation 组件配置
 */
export interface ReactElementAnnotationCfg extends HtmlComponentCfg {
    /** X 方向对齐，默认 left */
    alignX?: 'left' | 'middle' | 'right';
    /** Y 方向对齐，默认 top */
    alignY?: 'top' | 'middle' | 'bottom';
    /** 自定义 html */
    content: React.ReactElement | ((container?: HTMLElement) => React.ReactElement);
    /** zIndex 设置 */
    zIndex?: number;
}
