export interface IBaseProps {
    animate?: {
        /**
         * 目标样式
         * @type {Record<string, any>}
         */
        toAttrs: Record<string, any>;
        /**
         * 动画执行时间
         * @type {number}
         */
        duration: number;
        /**
         * 动画缓动效果
         * @type {string}}
         */
        easing?: string;
        /**
         * 动画执行的延迟时间
         * @type {function}}
         */
        delay?: number;
        /**
         * 是否重复执行动画
         * @type {boolean}}
         */
        repeat?: boolean;
        /**
         * 动画执行完时的回调函数
         * @type {function}}
         */
        callback?: () => void;
        /**
         * 动画暂停时的回调函数
         * @type {function}}
         */
        pauseCallback?: () => void;
        /**
         * 动画恢复(重新唤醒)时的回调函数
         * @type {function}}
         */
        resumeCallback?: () => void;
    };
    visible?: boolean;
    isClipShape?: boolean;
    matrix?: number[];
    [key: string]: any;
}
export default class Helper {
    instance: any;
    config: Record<string, any>;
    private shape;
    constructor(shape: any);
    createInstance(props: any): void;
    destroy(): void;
    update(props: any): void;
}
