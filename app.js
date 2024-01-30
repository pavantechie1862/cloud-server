const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));
require("dotenv").config();

const port = process.env.PORT;
app.use(cors());

app.use((req, res, next) => {
  console.log("hello world in cors");
  res.header(
    "Access-Control-Allow-Origin",
    "https://main.d2j3zrqyjtpuhw.amplifyapp.com"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.use(cors());

const employeeRoutes = require("./employee");
const customerRoutes = require("./customer");
const groups = require("./materialGroups");
const subgroup = require("./subGroup");
const test = require("./tests");
const order = require("./order");
const authRoute = require("./auth");
const jobs = require("./jobs");
const role = require("./roles");
const random = require("./random");

app.use("/employee", employeeRoutes);
app.use("/customer", customerRoutes);
app.use("/group", groups);
app.use("/subgroup", subgroup);
app.use("/test", test);
app.use("/order", order);
app.use("/auth", authRoute);
app.use("/jobs", jobs);
app.use("/role", role);
app.use("/random", random);

app.listen(port, () => {
  console.log(" server is started at some port : " + port);
});
