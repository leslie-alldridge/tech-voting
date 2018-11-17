const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

// //if (process.env.NODE_ENV === "production") {
// // Express will serve up production assets
// app.use(express.static("build"));
// app.get("/", (req, res) => res.sendFile(path.resolve("build", "index.html")));
// app.get("/aa", (req, res) => {
//   res.send("hi");
// });
// //}

// if (process.env.NODE_ENV === "dev") {
//   // Express will serve up production assets
//   app.use(express.static("public"));
//   app.get("/", (req, res) =>
//     res.sendFile(path.resolve("public", "index.html"))
//   );
//   app.get("/aa", (req, res) => {
//     res.send("hi");
//   });
// }

// app.listen(process.env.PORT || 8080);
app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
