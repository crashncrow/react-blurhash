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
var BlurhashCanvas_1 = require("./BlurhashCanvas");
var canvasStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
};
var Blurhash = /** @class */ (function (_super) {
    __extends(Blurhash, _super);
    function Blurhash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blurhash.prototype.componentDidUpdate = function () {
        if (this.props.resolutionX <= 0) {
            throw new Error('resolutionX must be larger than zero');
        }
        if (this.props.resolutionY <= 0) {
            throw new Error('resolutionY must be larger than zero');
        }
    };
    Blurhash.prototype.render = function () {
        var _a = this.props, hash = _a.hash, height = _a.height, width = _a.width, punch = _a.punch, resolutionX = _a.resolutionX, resolutionY = _a.resolutionY, style = _a.style, rest = __rest(_a, ["hash", "height", "width", "punch", "resolutionX", "resolutionY", "style"]);
        return (React.createElement("div", __assign({}, rest, { style: __assign(__assign({ display: 'inline-block', height: height, width: width }, style), { position: 'relative' }) }),
            React.createElement(BlurhashCanvas_1.default, { hash: hash, height: resolutionY, width: resolutionX, punch: punch, style: canvasStyle })));
    };
    Blurhash.defaultProps = {
        height: 128,
        width: 128,
        resolutionX: 32,
        resolutionY: 32,
    };
    return Blurhash;
}(React.PureComponent));
exports.default = Blurhash;
//# sourceMappingURL=Blurhash.js.map