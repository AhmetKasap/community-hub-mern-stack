class APIError {
    constructor(message, statusCode) {
        this.message = message
        this.statusCode = statusCode
    }
    messages(res){
        return res.status(this.statusCode).json({
            success : false,
            message : this.message
        })
    }
}

module.exports = APIError