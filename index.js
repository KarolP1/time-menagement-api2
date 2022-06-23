const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const api = require("./api");
const middlewares = require("./middlewares");

const PORT = process.env.PORT || 8081;

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log("listen on port " + PORT);
});
