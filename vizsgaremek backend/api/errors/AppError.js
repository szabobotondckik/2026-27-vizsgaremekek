class AppError extends Error
{
    constructor(message = "Internal Server Error", { status = 500, isOperational = true, details = {}, data = {} } = {})
    {
        super(message);
        this.status = status;
        this.isOperational = isOperational;
        this.details = details;
        this.details.message = message;
        this.data = data;
        this.name = this.constructor.name;

        
        if(process.env.NODE_ENV === "production") delete this.details;
        if(process.env.NODE_ENV === "production") delete this.data;
        if(process.env.NODE_ENV !== "production") Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;