// ==UserScript==
// @name         DTI-OldSiteRedirect
// @namespace    mailto:52beans@protonmail.com
// @version      1.0
// @description  redirects from old site to new site from user lists
// @author       slugcastle
// @match        https://impress-2020.openneo.net/user/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openneo.net
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let u = location.pathname.match(/(?<=\/user\/)\d+/);
  location.href = `https://impress.openneo.net/user/${u}/closet`;
})();
