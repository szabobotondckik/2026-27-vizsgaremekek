const AppError = require("./AppError");

class ForbiddenError extends AppError
{
    constructor(message = "You do not have the required privileges to use this feature", options = {})
    {
        super(message, { ...options, status: 403, isOperational: true });
    }
}

module.exports = ForbiddenError;