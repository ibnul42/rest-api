const express = require("express");
const dotenv = require("dotenv").config();
const bp = require("body-parser");
const port = process.env.PORT || 4000;

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/api/v1", require("./routes/allRoutes"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
