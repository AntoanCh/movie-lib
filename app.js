const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRoute");
const favoritesRouter = require("./routes/favoritesRoute");
const ratingsRouter = require("./routes/ratingsRoute");
const notesRouter = require("./routes/notesRoute");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/favorites", favoritesRouter);
app.use("/api/ratings", ratingsRouter);
app.use("/api/notes", notesRouter);
app.use(errorHandler);

module.exports = app;
