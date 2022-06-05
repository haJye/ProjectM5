const express = require("express");
const cors = require("cors");
const con = require("./db.js");
const userrouter = require("./routes/userRoute.js");
require("dotenv").config();

const app = express();
//middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

con.query("select * from users", (error, data) => {
  if (!error) {
    console.log(data);
  }
});

app.use("/", userrouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`SIZ ${PORT} PORTA QOSHULDUNUZ`);
  }
});
