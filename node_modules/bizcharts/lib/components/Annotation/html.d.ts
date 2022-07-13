import Base, { IAnnotationBaseProps } from './base';
import { HtmlAnnotationOption } from '../../interface';
declare type BaseProps = Omit<IAnnotationBaseProps, 'offsetX'>;
interface HtmlAnnotationProps extends HtmlAnnotationOption, BaseProps {
}
export default class Html extends Base<HtmlAnnotationProps> {
    annotationType: string;
}
export {};
