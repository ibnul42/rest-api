const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;

const app = express();

app.use("/api/v1", require("./routes/allRoutes"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
