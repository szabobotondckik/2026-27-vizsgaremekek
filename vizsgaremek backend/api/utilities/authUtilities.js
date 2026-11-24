const bcrypt = require("bcrypt");

const salt = 10;

const jwt = require("jsonwebtoken");
const { ForbiddenError } = require("../errors");

async function hashPassword(password)
{
    return await bcrypt.hash(password, salt);
}

async function checkPassword(password, hashedPassword)
{
    return await bcrypt.compare(password, hashedPassword);
}

async function generateToken(data)
{
    return jwt.sign(data, process.env.JWT_SECRET);
}

async function verifyToken(token)
{
    try
    {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
    catch(error)
    {
        throw new ForbiddenError("Invalid token");
    }
}

function setCookie({data, key}, req, res, next)
{
    res.status(204).cookie(key, data, { httpOnly: true, /* secure: true */ });
}

module.exports =
{
    hashPassword,
    checkPassword,
    generateToken,
    verifyToken,
    setCookie,
}
