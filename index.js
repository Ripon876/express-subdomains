const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  if (req.subdomains.length) {
    const subdomain = req.subdomains.join(".");
    console.log(req.subdomains);
    console.log("subdomain", subdomain);
    return res.send(req.subdomains);
  } else {
    console.log("no subdomain");
  }
  return next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
