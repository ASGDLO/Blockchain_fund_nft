import Arc from '../components/Annotation/arc';
import DataMarker from '../components/Annotation/dataMarker';
import DataRegion from '../components/Annotation/dataRegion';
import Image from '../components/Annotation/image';
import Line from '../components/Annotation/line';
import Region from '../components/Annotation/region';
import Text from '../components/Annotation/text';
declare const Guide: {
    (props: any): any;
    Arc: typeof Arc;
    DataMarker: typeof DataMarker;
    DataRegion: typeof DataRegion;
    Image: typeof Image;
    Line: typeof Line;
    Region: typeof Region;
    Text: typeof Text;
};
export default Guide;
