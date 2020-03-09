module.exports = function ({}) {
    return function (req, res, next) {
        console.log('Url is: ' + req.url)
        next()
    }
};