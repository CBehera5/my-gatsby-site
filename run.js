require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"]
  });
  require("newrelic");
  
  // Now require the entry point of your Gatsby page.
  require("./src/pages/index.mjs");
  