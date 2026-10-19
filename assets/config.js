/*
 * Today Daily Scroll — Website configuration
 * ------------------------------------------------------------------
 * Optional dashboard / OAuth backend URL for demo buttons.
 * Leave APP_BASE_URL empty to hide dashboard deep-links on the static site.
 * This public GitHub Pages site does not host OAuth callbacks.
 */
(function () {
  "use strict";

  // Set only when a stable public HTTPS dashboard URL is available.
  var APP_BASE_URL = "";

  var TIKTOK_LOGIN_PATH = "/oauth/tiktok/login";

  function applyConfig() {
    var base = (APP_BASE_URL || "").replace(/\/+$/, "");
    var dashboardBtn = document.querySelector("[data-tds-dashboard]");
    var connectBtn = document.querySelector("[data-tds-connect]");

    if (!base) {
      if (dashboardBtn) dashboardBtn.hidden = true;
      if (connectBtn) connectBtn.hidden = true;
      return;
    }

    if (dashboardBtn) {
      dashboardBtn.hidden = false;
      dashboardBtn.setAttribute("href", base);
    }
    if (connectBtn) {
      connectBtn.hidden = false;
      connectBtn.setAttribute("href", base + TIKTOK_LOGIN_PATH);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyConfig);
  } else {
    applyConfig();
  }
})();
