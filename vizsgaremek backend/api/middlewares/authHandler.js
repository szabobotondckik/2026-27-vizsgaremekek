const { UnauthorizedError, ForbiddenError } = require("../errors");
const { verifyToken } = require("../utilities/authUtils");

function isUserLoggedIn(req, res, next)
{
    const { token } = req.cookies || {};

    if(!token) throw new UnauthorizedError();

    const user = verifyToken(token);

    req.user = user;

    next();
}

function isUserAdmin(req, res, next)
{
    if(req.user.role !== "admin") throw new ForbiddenError("You must be an admin to use this feature");

    next();
}

module.exports =
{
    isUserLoggedIn,
    isUserAdmin,
}