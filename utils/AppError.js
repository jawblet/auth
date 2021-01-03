class AppError extends Error {
    constructor(message, code) {
    super(message) // bult-in param for Error object 
        console.log('this is the appError');
        this.code = code;
        //detect HTTP status code by first digit of error code // do you need a status for errors? 
        //this.status = code.startsWith('4') ? 'fail' : 'error'; 
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor); 
    }
}

module.exports = AppError;