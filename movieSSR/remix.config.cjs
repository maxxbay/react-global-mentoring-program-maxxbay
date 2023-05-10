const routes = require("./routes.js").default;

module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "server-build",
  serverEntryPath: "app/entry.server.js",
  getRoutes: () => routes.default,
};
