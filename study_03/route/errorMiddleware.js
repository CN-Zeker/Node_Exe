module.exports = (err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err.message,
    });
  } else {
    next();
  }
};
