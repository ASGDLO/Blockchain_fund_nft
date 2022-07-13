"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 兼容, 4.2 后删除
var warning_1 = __importDefault(require("warning"));
// annotation G2暂不支持自定义组件。
var arc_1 = __importDefault(require("../components/Annotation/arc"));
var dataMarker_1 = __importDefault(require("../components/Annotation/dataMarker"));
var dataRegion_1 = __importDefault(require("../components/Annotation/dataRegion"));
// import Html from '../components/Annotation/html';
var image_1 = __importDefault(require("../components/Annotation/image"));
var line_1 = __importDefault(require("../components/Annotation/line"));
var region_1 = __importDefault(require("../components/Annotation/region"));
var text_1 = __importDefault(require("../components/Annotation/text"));
var Guide = function (props) {
    warning_1.default(false, 'Guide组件将在5.0后不再支持，请使用Annotation替代，请查看Annotation的使用文档');
    return props.children;
};
Guide.Arc = arc_1.default;
Guide.DataMarker = dataMarker_1.default;
Guide.DataRegion = dataRegion_1.default;
// Guide.Html = Html;
Guide.Image = image_1.default;
Guide.Line = line_1.default;
Guide.Region = region_1.default;
Guide.Text = text_1.default;
exports.default = Guide;
//# sourceMappingURL=Guide.js.map