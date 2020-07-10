
class Helper {

    errorHandler(request, error, status) {
        request
            .status(status)
            .json({ error })
    }
}

export default Helper;