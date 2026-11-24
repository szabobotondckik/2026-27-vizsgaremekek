const AppError = require("./AppError");

class BadRequestError extends AppError
{
    constructor(message = "Bad Request", options = {})
    {
        super(message, 
        {
            status: 400,
            isOperational: true,
            ...options,
        });
    }
}

module.exports = BadRequestError;