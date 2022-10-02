require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = 3333;

const app = express();

// const corOptions = {
//   origin: `http://127.0.0.1:${port}`,
// };

// middleware
// app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const router = require("./routes/employeeRouter");
app.use("/api/employees", router);

// testing API
app.get("/", (req, res) => {
  res.send({ message: "Hey! I'm online" });
});

// Connecting Sequilize
require("./models");

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
