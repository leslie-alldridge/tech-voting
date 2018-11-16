const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));
  app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
}

if (process.env.NODE_ENV === "dev") {
  // Express will serve up production assets
  app.use(express.static("public"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("public", "index.html"))
  );
}

app.listen(process.env.PORT || 8080);
