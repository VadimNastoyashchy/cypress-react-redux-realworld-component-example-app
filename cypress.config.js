const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    video: false,
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    }
  }
});