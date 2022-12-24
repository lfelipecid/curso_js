module.exports = (req, res, next) => {
    res.locals.umTeste = 'Isso é um teste'
    next()
}