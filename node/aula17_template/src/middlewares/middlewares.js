exports.global = (req, res, next) => {
    console.log()
    console.log('Passei no middleware global')
    console.log()
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
}

exports.csrfMiddleWare = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}