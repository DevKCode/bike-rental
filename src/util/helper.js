
class Helper {
    // Error handler
    errorHandler(request, error, status) {
        request
            .status(status)
            .json({ error })
    }
}

export default Helper;