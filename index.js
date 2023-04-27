// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const os = require('@nexssp/os/legacy');

console.log(os.name());
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  // let example = {
  //   up_time: Math.floor(process.uptime())
  // };

  let a = {
    up_time: Math.floor(process.uptime())
  }
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(a))
  // res.render("index", { title: "Home" });
});
/**
 * Server Activation
 */
app.listen(port, () => {
  console.log('Listening to requests on http://10.199.106.1/:${port}');
});
