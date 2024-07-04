// function to generate and get csrf token to protect against csrf attacks
function addCsrfToken(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
}

module.exports = addCsrfToken;
