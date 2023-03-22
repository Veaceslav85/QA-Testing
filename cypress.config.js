const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 6000,
    execTimeout: 10000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
