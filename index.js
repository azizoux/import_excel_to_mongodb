import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import provinceRouter from "./routes/provinceRoute.js";

mongoose.connect("mongodb://localhost:27017/test").then(() => {
  console.log("Connected to data base...");
});
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", provinceRouter);

app.listen(3000, () => {
  console.log("Server running on 3000...");
});
