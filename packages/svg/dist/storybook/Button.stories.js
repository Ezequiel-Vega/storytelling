"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
var Button_1 = require("./Button");
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
var meta = {
    title: 'Example/Button',
    tags: ['autodocs'],
    render: function (args) {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        return (0, Button_1.createButton)(args);
    },
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
};
exports.default = meta;
// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
exports.Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};
exports.Secondary = {
    args: {
        label: 'Button',
    },
};
exports.Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
exports.Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
