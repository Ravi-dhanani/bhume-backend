var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var language = require("./routes/language");
var home = require("./routes/home");
var career = require("./routes/career");
var inquiry = require("./routes/inquiry");
var about = require("./routes/about");
var termsCondition = require("./routes/terms-condition");
var privacyPolicy = require("./routes/privacy-policy");
var admin = require("./routes/admin");
var services = require("./routes/services");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", language);
app.use("/api", home);
app.use("/api", career);
app.use("/api", inquiry);
app.use("/api", about);
app.use("/api", termsCondition);
app.use("/api", privacyPolicy);
app.use("/api", admin);
app.use("/api", services);

app.use(function (req, res, next) {
  res.send("hello");
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
