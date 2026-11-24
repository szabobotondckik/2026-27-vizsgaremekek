const { UnauthorizedError, NotFoundError } = require("../errors");
const { checkPassword, generateToken, verifyToken, setCookie } = require("../utilities/authUtils");

let users =
[
    { username: "asd", password: "$2b$14$odZb3MkYs01iDPEuhns8xOPYooeeotR3PlAZFJ86iUtZl2a9xRXfm" },
    { username: "a", password: "$2b$14$4gGYIjkJE5MhMU0ICBydmuZbjEDc/0AtwwtMGOwrBzDvTell4muD2" },
    { username: "b", password: "$2b$14$xLKLgfYZi7Lj77QDlzbeW.GDk5pNJKxRK5Q/NO42zjH1iEXarypH6" },
    { username: "admin", password: "$2b$14$IMwICzI0xDiUdH8pE1U1xe5VxEaB/8AYM/7FhRuNnj441CsgSWDcy", role: "admin" },
];

function getAuthStatus(req, res, next)
{
    const { token } = req.cookies || {};

    if(!token) throw new UnauthorizedError("User is not logged in");

    const user = verifyToken(token);

    res.status(200).json(user);
}

function login(req, res, next)
{
    const { username, password } = req.body || {};

    const currentUser = users.find(user => user.username === username);

    if(!currentUser) throw new NotFoundError("User not found");

    if(!checkPassword(password, currentUser.password)) throw new UnauthorizedError("Username or password is incorrect");

    const token = generateToken(currentUser);

    setCookie({ data: token, key: "token" }, req, res, next);

    res.status(201).json(currentUser);
}

function logout(req, res, next)
{
    res.clearCookie("token").sendStatus(204);
}

module.exports =
{
    getAuthStatus,
    login,
    logout,
}