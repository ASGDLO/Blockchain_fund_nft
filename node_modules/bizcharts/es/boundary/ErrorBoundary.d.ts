import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
export interface ErrorBoundaryProps {
    onResetKeysChange?: (prevResetKeys: Array<any>, resetKeys: Array<any>) => void;
    onReset?: () => void;
    onError?: (error: Error, info: {
        componentStack: string;
    }) => void;
    resetKeys?: Array<any>;
    fallback?: React.ReactElement<any, any> | null;
    [key: string]: any;
}
export declare function ErrorFallback(args: any): JSX.Element;
export declare const setDefaultErrorFallback: (CustComponents: any) => void;
export default ErrorBoundary;
