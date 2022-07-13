"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useChartView_1 = __importDefault(require("../../hooks/useChartView"));
function Interaction(props) {
    var chart = useChartView_1.default();
    var type = props.type, config = props.config;
    // @ts-ignore
    react_1.useLayoutEffect(function () {
        chart.interaction(type, config);
        return function () {
            chart.removeInteraction(type);
        };
    });
    return null;
}
exports.default = Interaction;
//# sourceMappingURL=index.js.map