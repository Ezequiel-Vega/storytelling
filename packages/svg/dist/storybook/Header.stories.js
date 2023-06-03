"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
var Header_1 = require("./Header");
var meta = {
    title: 'Example/Header',
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/html/writing-docs/autodocs
    tags: ['autodocs'],
    render: function (args) { return (0, Header_1.createHeader)(args); },
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
    },
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        onLogin: { action: 'onLogin' },
        onLogout: { action: 'onLogout' },
        onCreateAccount: { action: 'onCreateAccount' },
    },
};
exports.default = meta;
exports.LoggedIn = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
};
exports.LoggedOut = {};
