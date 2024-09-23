// Express js

const express = require("express");
const app = express();
const PORT = 3300;
const dasboardroutes = require("./router/expressrouter");
app.use('/dashboard', dasboardroutes);

app.listen(PORT,() => {
  console.log("hello world listening port" + PORT);
});