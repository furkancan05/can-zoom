"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
/**
 * Component that you can zoom images with mouse hover.
 */
function ZoomImage(_a) {
    var scale = _a.scale, maxScale = _a.maxScale, width = _a.width, height = _a.height, backgroundColor = _a.backgroundColor, imagePath = _a.imagePath, objectFit = _a.objectFit, cursor = _a.cursor, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, borderColor = _a.borderColor, borderRadius = _a.borderRadius;
    var _b = react_1.default.useState({
        imageScale: 1,
        isMaxScale: false,
        position: {
            x: 0,
            y: 0,
        },
    }), states = _b[0], setStates = _b[1];
    var handleClick = function () {
        if (!maxScale)
            return;
        setStates(__assign(__assign({}, states), { isMaxScale: !states.isMaxScale }));
    };
    var handleMouseLeave = function () {
        return setStates(__assign(__assign({}, states), { imageScale: 1, isMaxScale: false }));
    };
    var handleMouseMove = function (e) {
        var calcScale = states.imageScale;
        if (maxScale) {
            calcScale = states.isMaxScale ? maxScale : states.imageScale;
        }
        var _a = e.target.getBoundingClientRect(), left = _a.left, top = _a.top;
        var x = (e.clientX - left) / calcScale;
        var y = (e.clientY - top) / calcScale;
        setStates(__assign(__assign({}, states), { imageScale: scale, position: { x: x, y: y } }));
    };
    var containerStyle = {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: backgroundColor,
        cursor: cursor || "default",
        borderStyle: borderStyle || "none",
        borderWidth: "".concat(borderWidth, "px"),
        borderColor: borderColor,
        borderRadius: borderRadius,
    };
    var imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: objectFit || "contain",
        transform: "scale(".concat(states.isMaxScale ? maxScale : states.imageScale, ")"),
        transformOrigin: "".concat(states.position.x, "px ").concat(states.position.y, "px"),
    };
    return (react_1.default.createElement("div", { style: containerStyle, onMouseLeave: handleMouseLeave, onMouseMove: handleMouseMove, onClick: handleClick },
        react_1.default.createElement("img", { src: imagePath, alt: "", style: imageStyle })));
}
exports.default = ZoomImage;
