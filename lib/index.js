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
import React, { useState, useRef, useEffect } from "react";
var Slider = function (_a) {
    var _b;
    var _c = _a.auto, auto = _c === void 0 ? true : _c, _d = _a.width, width = _d === void 0 ? '100%' : _d, _e = _a.height, height = _e === void 0 ? '100px' : _e, _f = _a.delay, delay = _f === void 0 ? 2000 : _f, _g = _a.children, children = _g === void 0 ? [] : _g, _h = _a.showButtons, showButtons = _h === void 0 ? true : _h, _j = _a.activeButtonColor, activeButtonColor = _j === void 0 ? "green" : _j;
    var _k = useState(0), moveTo = _k[0], setMoveTo = _k[1];
    var ref = useRef(null);
    useEffect(function () {
        if (auto) {
            var timer_1 = setTimeout(function () {
                if (moveTo < children.length - 1) {
                    setMoveTo(moveTo + 1);
                }
                else {
                    setMoveTo(0);
                }
            }, delay);
            return function () { return clearTimeout(timer_1); };
        }
    }, [moveTo, auto, delay, children.length]);
    var root = {
        position: 'relative',
        overflow: "hidden",
        width: width,
        height: height
    };
    var slideContainer = {
        height: "100%",
        display: "flex",
        width: 100 * children.length + "%",
        transform: "translateX(" + -moveTo * ((_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.clientWidth) + "px)",
        transition: "1s ease-in-out",
    };
    var thumbsContainer = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        position: "relative",
    };
    var controlsContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        position: "absolute",
        left: 0,
        bottom: 0,
        flexWrap: 'wrap',
    };
    var controlButton = {
        width: "16px",
        height: "6px",
        margin: "0.2rem",
        color: "white",
        fontSize: "5px",
        textAlign: "center",
    };
    var controllButtonParent = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        cursor: "pointer",
    };
    return (React.createElement("div", { ref: ref, style: root },
        React.createElement("div", { onClick: function () {
                if (moveTo < 1) {
                    setMoveTo(children.length - 1);
                }
                else {
                    setMoveTo(moveTo - 1);
                }
            }, style: {
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                width: '50px',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                color: 'white',
                fontSize: '24px',
            } }, "\u276E"),
        React.createElement("div", { onClick: function () {
                if (moveTo > children.length) {
                    setMoveTo(0);
                }
                else {
                    setMoveTo(moveTo + 1);
                }
            }, style: {
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                width: '50px',
                height: '100%',
                position: 'absolute',
                top: 0,
                right: 0,
                color: 'white'
            } }, "\u276F"),
        React.createElement("div", { style: slideContainer }, children),
        React.createElement("div", { style: thumbsContainer }, showButtons && React.createElement("div", { style: controlsContainer }, children.map(function (_, index) {
            return (React.createElement("div", { key: index, style: controllButtonParent, onClick: function () {
                    setMoveTo(index);
                } },
                React.createElement("div", { style: __assign(__assign({}, controlButton), { backgroundColor: moveTo === index ? activeButtonColor : "lightgrey" }) })));
        })))));
};
export default Slider;
