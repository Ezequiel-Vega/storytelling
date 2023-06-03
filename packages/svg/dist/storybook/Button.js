"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createButton = void 0;
require("./button.css");
/**
 * Primary UI component for user interaction
 */
var createButton = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, backgroundColor = _a.backgroundColor, label = _a.label, onClick = _a.onClick;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = label;
    if (onClick) {
        btn.addEventListener('click', onClick);
    }
    var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    btn.className = ['storybook-button', "storybook-button--".concat(size), mode].join(' ');
    if (backgroundColor) {
        btn.style.backgroundColor = backgroundColor;
    }
    return btn;
};
exports.createButton = createButton;
