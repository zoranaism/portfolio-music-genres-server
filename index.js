const express = require("express");
const app = express();
const genreRouter = require("./routers/genre");
const loggerMiddleWare = require("morgan");
const bodyParserMiddleWare = express.json();
const corsMiddleWare = require("cors");
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");


app.use(loggerMiddleWare("dev"));

app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/genres", genreRouter);

app.use("/", authRouter);

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
