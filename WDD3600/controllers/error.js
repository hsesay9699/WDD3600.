/**
 * controllers/error.js
 * Controller file for error/404 logic.
 * This function runs if no other route matched the incoming request.
 * (Required: add code comments for this file.)
 */
exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: ''
  });
};
