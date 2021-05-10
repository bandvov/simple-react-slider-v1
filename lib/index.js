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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
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
    return (_jsxs("div", __assign({ ref: ref, style: root }, { children: [_jsx("div", __assign({ onClick: function () {
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
                } }, { children: "\u276E" }), void 0),
            _jsx("div", __assign({ onClick: function () {
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
                } }, { children: "\u276F" }), void 0),
            _jsx("div", __assign({ style: slideContainer }, { children: children }), void 0),
            _jsx("div", __assign({ style: thumbsContainer }, { children: showButtons && _jsx("div", __assign({ style: controlsContainer }, { children: children.map(function (_, index) {
                        return (_jsx("div", __assign({ style: controllButtonParent, onClick: function () {
                                setMoveTo(index);
                            } }, { children: _jsx("div", { style: __assign(__assign({}, controlButton), { backgroundColor: moveTo === index ? activeButtonColor : "lightgrey" }) }, void 0) }), index));
                    }) }), void 0) }), void 0)] }), void 0));
};
function App() {
    var _a = useState("100%"), width = _a[0], setWidth = _a[1];
    var _b = useState("30vw"), height = _b[0], setHeight = _b[1];
    var _c = useState(5), controlsNumber = _c[0], setControlsNumber = _c[1];
    var _d = useState(true), auto = _d[0], setAuto = _d[1];
    var buttonStyle = {
        backgroundColor: "transparent",
        padding: ".5rem",
        marginRight: ".5rem",
        width: "100px",
        borderRadius: "4px",
        borderColor: "blue",
        borderWidth: "1px",
        "&:hover": {
            backgroundColor: "red",
        },
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ style: {
                    height: "30vw",
                    display: "flex",
                    justifyContent: "center",
                    padding: "0",
                    margin: "2rem",
                } }, { children: _jsx(Slider, __assign({ auto: auto, width: width, height: height }, { children: Array(controlsNumber)
                        .fill(controlsNumber)
                        .map(function (_, index) {
                        return (_jsx("div", { style: {
                                width: "100%",
                                backgroundColor: index % 2 === 0 ? "red" : "blue",
                            } }, void 0));
                    }) }), void 0) }), void 0),
            _jsxs("div", __assign({ style: {
                    margin: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                } }, { children: [_jsxs("div", { children: [_jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setWidth("100%"); } }, { children: ["width 100%", " "] }), void 0),
                            _jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setWidth("50vw"); } }, { children: ["width 50vw", " "] }), void 0),
                            _jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setWidth("200px"); } }, { children: ["width 200px", " "] }), void 0),
                            _jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setWidth("500px"); } }, { children: ["width 500px", " "] }), void 0)] }, void 0),
                    _jsx("hr", {}, void 0),
                    _jsxs("div", { children: [_jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setHeight("100px"); } }, { children: ["height 100px", " "] }), void 0),
                            _jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setHeight("40vh"); } }, { children: ["height 40vh", " "] }), void 0),
                            _jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setHeight("30vw"); } }, { children: ["height 30vw", " "] }), void 0)] }, void 0),
                    _jsx("hr", {}, void 0),
                    _jsxs("div", { children: [_jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setControlsNumber(10); } }, { children: ["10 items", " "] }), void 0),
                            _jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setControlsNumber(20); } }, { children: ["20 items", " "] }), void 0),
                            _jsxs("button", __assign({ style: buttonStyle, onClick: function () { return setControlsNumber(40); } }, { children: ["40 items", " "] }), void 0)] }, void 0),
                    _jsx("hr", {}, void 0),
                    _jsxs("label", { children: [_jsx("input", { style: { width: "1rem", height: "1rem" }, checked: auto, onChange: function (e) {
                                    if (e.target.checked) {
                                        setAuto(true);
                                    }
                                    else {
                                        setAuto(false);
                                    }
                                }, type: "checkbox" }, void 0),
                            _jsx("em", __assign({ style: {
                                    fontSize: "24px",
                                    marginLeft: "1rem",
                                    color: auto ? "green" : "",
                                } }, { children: "Set auto scroll" }), void 0)] }, void 0)] }), void 0)] }, void 0));
}
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}, void 0) }, void 0) }, void 0), document.getElementById("root"));
export default Slider;
