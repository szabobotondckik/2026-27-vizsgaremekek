const AppError = require("./AppError");

class ValidationError extends AppError
{
    constructor(message = "Validation Error", options = {})
    {
        super(message, 
        {
            ...options,
            status: 400,
            isOperational: true,
        });

        this.errors = [];
    }
}

module.exports = ValidationError;