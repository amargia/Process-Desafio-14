const auth = (req, res, next) => {
    if (req.isAuthenticated(req)) {
        return next();
    } else {
        res.render('login');
    }
}

module.exports = auth;