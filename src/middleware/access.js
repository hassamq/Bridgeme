const isAuth = async (req, res, next) => {
  const { _id, isLogged } = req.session;

  if (!_id || !isLogged) return res.redirect('/'); 

  next();
};

module.exports.isAuth = isAuth;