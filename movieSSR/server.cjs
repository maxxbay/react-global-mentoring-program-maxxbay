const express = require("express");
const { createRequestHandler } = require("@remix-run/server-runtime");
const routes = require("./routes.js");

const app = express();

app.all(
  "*",
  createRequestHandler({
    getLoadContext() {},
    routes,
  })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
