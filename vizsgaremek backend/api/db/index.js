const { Sequelize } = require("sequelize");

const config = require("./config/config")[process.env.NODE_ENV];

const sequelize = new Sequelize
(
    config.database,
    config.username,
    config.password,

    {
        host: config.host,
        dialect: config.dialect,

        logging: false,
    }
);

const models = require("../models")(sequelize);

module.exports =
{
    Sequelize,
    sequelize,
    ...models,
};