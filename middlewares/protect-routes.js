// function to protect routes and only let admins access it
function protectRoutes(req, res, next) {
  if (!res.locals.isAuth) {
    return res.redirect("/401");
  }

  if (req.path.startsWith("/admin") && !res.locals.isAdmin) {
    return res.redirect("/403");
  }

  next();
}

module.exports = protectRoutes;

