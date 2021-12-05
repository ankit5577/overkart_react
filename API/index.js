require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// import routes
const ProductRoute = require("./controller/product");
const AdminRoute = require("./controller/admin");
const UserRoute = require("./controller/user");

const app = express();

mongoose.Promise = global.Promise;
// mongo connection {DB}
(function mongoConnect() {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", (err) => {
    if (!err) {
      console.log("connected to DB");
    }
  });
})();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(function (req, res, next) {
  //allow cross origin requests
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));

// localhost:3000/api/product/
app.use("/api/product", ProductRoute);
app.use("/api/user", UserRoute);
app.use("/api/admin", AdminRoute);

app.use((res, error) => {
  console.error('error??', error.errors, res);
  // console.log("error???", error);
  // res.json({hello})
});

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`API running on PORT ${PORT}`);
  }
});
