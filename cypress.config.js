const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    video: false,
    screenshotOnRunFailure: false,
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    }
  }
});