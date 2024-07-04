// function to give 404 not found error
function notFoundHandler(req, res) {
  res.render("shared/404");
}

module.exports = notFoundHandler;
