const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");

const productRoutes = require("./routes/product"); //admin data
const userRoutes = require("./routes/user");

const corsOptions = {
  origin: 'http://localhost',
}



//app.use(cors);
 /*
app.use(function (req, res, next) {
 res.header("Access-Control-Allow-Origin", "127.0.0.1"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  next();
});
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api",cors(corsOptions), userRoutes.router);
app.use("/api", productRoutes.router);
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, 'client')))

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

const hostname = "127.0.0.1";
const port = 4000;

app.use((req, res) => {
  console.log(productRoutes.products);
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
