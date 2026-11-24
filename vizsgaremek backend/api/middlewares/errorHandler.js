const { NotFoundError, AppError } = require("../errors");

function notFound(req, res, next)
{
    throw new NotFoundError();
}

function showError(error, req, res, next)
{
    const stack = error.stack;

    if(!(error instanceof AppError))
    {
        error = new AppError("Unexpected Server Occured", 
        {
            details: { message: error.message },
        });
    }

    delete error.details.message;

    res.status(error.status).json(
    {
        message: error.message,
        ...error,
        stack
    });
}

module.exports =
[
    notFound,
    showError,
];