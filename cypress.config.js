const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    execTimeout: 4000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
