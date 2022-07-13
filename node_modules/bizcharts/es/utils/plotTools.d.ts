import React from 'react';
export declare const visibleHelper: (cfg: any, defaultVisible?: boolean) => {
    visible: boolean;
    text: string | React.ReactElement<unknown, string | ((props: any) => React.ReactElement<any, any>) | (new (props: any) => React.Component<any, any, any>)>;
} | {
    visible: boolean;
    text?: undefined;
};
export declare const visibleHelperInvert: (cfg: any) => any;
