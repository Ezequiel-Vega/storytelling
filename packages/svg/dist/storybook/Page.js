"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPage = void 0;
require("./page.css");
var Header_1 = require("./Header");
var createPage = function () {
    var article = document.createElement('article');
    var user;
    var header = null;
    var rerenderHeader = function () {
        var wrapper = document.getElementsByTagName('article')[0];
        wrapper.replaceChild(createHeaderElement(), wrapper.firstChild);
    };
    var onLogin = function () {
        user = { name: 'Jane Doe' };
        rerenderHeader();
    };
    var onLogout = function () {
        user = undefined;
        rerenderHeader();
    };
    var onCreateAccount = function () {
        user = { name: 'Jane Doe' };
        rerenderHeader();
    };
    var createHeaderElement = function () {
        return (0, Header_1.createHeader)({ onLogin: onLogin, onLogout: onLogout, onCreateAccount: onCreateAccount, user: user });
    };
    header = createHeaderElement();
    article.appendChild(header);
    var section = "\n  <section class=\"storybook-page\">\n    <h2>Pages in Storybook</h2>\n    <p>\n      We recommend building UIs with a\n      <a\n        href=\"https://blog.hichroma.com/component-driven-development-ce1109d56c8e\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\">\n        <strong>component-driven</strong>\n      </a>\n      process starting with atomic components and ending with pages.\n    </p>\n    <p>\n      Render pages with mock data. This makes it easy to build and review page states without\n      needing to navigate to them in your app. Here are some handy patterns for managing page data\n      in Storybook:\n    </p>\n    <ul>\n      <li>\n        Use a higher-level connected component. Storybook helps you compose such data from the\n        \"args\" of child component stories\n      </li>\n      <li>\n        Assemble data in the page component from your services. You can mock these services out\n        using Storybook.\n      </li>\n    </ul>\n    <p>\n      Get a guided tutorial on component-driven development at\n      <a href=\"https://storybook.js.org/tutorials/\" target=\"_blank\" rel=\"noopener noreferrer\">\n        Storybook tutorials\n      </a>\n      . Read more in the\n      <a href=\"https://storybook.js.org/docs\" target=\"_blank\" rel=\"noopener noreferrer\">docs</a>\n      .\n    </p>\n    <div class=\"tip-wrapper\">\n      <span class=\"tip\">Tip</span>\n      Adjust the width of the canvas with the\n      <svg width=\"10\" height=\"10\" viewBox=\"0 0 12 12\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g fill=\"none\" fillRule=\"evenodd\">\n          <path\n            d=\"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0\n            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0\n            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z\"\n            id=\"a\"\n            fill=\"#999\" />\n        </g>\n      </svg>\n      Viewports addon in the toolbar\n    </div>\n  </section>\n";
    article.insertAdjacentHTML('beforeend', section);
    return article;
};
exports.createPage = createPage;
