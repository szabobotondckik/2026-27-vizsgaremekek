const db = require("../db");

const { userService } = require("../services")(db);

async function getUser(req, res, next)
{
    const { name } = req.params;

    const user = await userService.getUser({ name });

    res.status(200).json(user);
}

async function getUsers(req, res, next)
{
    res.status(200).json(await userService.getUsers());
}

async function createUser(req, res, next)
{
    let { name} = req.body || {};

    const userInfo =
    {
        name
    };

    res.status(201).json(await userService.createUser({ userInfo }));
}

async function updateUser(req, res, next)
{
    const { author_id, name } = req.body || {};

    res.status(200).json(await userService.updateUser(
    { 
        username: req.params.username,
        userInfo:
        {
            author_id,
            name
        }
    }));
}

async function deleteUser(req, res, next)
{
    res.status(200).json(await userService.deleteUser({ username: req.params.username }));
}

module.exports = 
{
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}