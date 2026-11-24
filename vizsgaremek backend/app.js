const express = require("express");

const errorHandler = require("./api/middlewares/errorHandler");

const cookieParser = require("cookie-parser");

const app = express();

const api = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const { userRoutes, authRoutes } = require("./api/routes");

app.use("/api", api);

api.use("/users", userRoutes);

api.use("/auth", authRoutes);

app.use(...errorHandler);

module.exports =
{
    app,
    api,
}