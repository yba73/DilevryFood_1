exports.isAdminMiddleware = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(401).json({ msg: "you are not admin." });
    }
    next();
  };
};
