"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var blurhash_1 = require("blurhash");
var BlurhashCanvas = /** @class */ (function (_super) {
    __extends(BlurhashCanvas, _super);
    function BlurhashCanvas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.handleRef = function (canvas) {
            _this.canvas = canvas;
            _this.draw();
        };
        _this.draw = function () {
            var _a = _this.props, hash = _a.hash, height = _a.height, punch = _a.punch, width = _a.width;
            if (_this.canvas) {
                var pixels = blurhash_1.decode(hash, width, height, punch);
                var ctx = _this.canvas.getContext('2d');
                var imageData = ctx.createImageData(width, height);
                imageData.data.set(pixels);
                ctx.putImageData(imageData, 0, 0);
            }
        };
        return _this;
    }
    BlurhashCanvas.prototype.componentDidUpdate = function () {
        this.draw();
    };
    BlurhashCanvas.prototype.render = function () {
        var _a = this.props, hash = _a.hash, height = _a.height, width = _a.width, rest = __rest(_a, ["hash", "height", "width"]);
        return React.createElement("canvas", __assign({}, rest, { height: height, width: width, ref: this.handleRef }));
    };
    BlurhashCanvas.defaultProps = {
        height: 128,
        width: 128,
    };
    return BlurhashCanvas;
}(React.PureComponent));
exports.default = BlurhashCanvas;
//# sourceMappingURL=BlurhashCanvas.js.map