const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { ForbiddenError } = require("../errors");

function hashPassword(password)
{
    const salt = 10;
    
    console.log(password);

    return bcrypt.hashSync(password, salt);
}

function checkPassword(password, hashedPassword)
{
    return bcrypt.compareSync(password, hashedPassword);
}

function generateToken(data)
{
    return jwt.sign(data, process.env.JWT_SECRET);
}

function verifyToken(token)
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

function setCookie({ data, key }, req, res, next)
{
    res.cookie(key, data, { httpOnly: true });
}

module.exports =
{
    hashPassword,
    checkPassword,
    generateToken,
    verifyToken,
    setCookie,
}