const AppError = require("./AppError");

class UnauthorizedError extends AppError
{
    constructor(message = "You need to be logged in to use this feature", options = {})
    {
        super(message, { ...options, status: 401, isOperational: true });
    }
}

module.exports = UnauthorizedError;