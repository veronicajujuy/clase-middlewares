const admins = ["Ada", "Greta", "Vim", "Tim"];
const adminAuth = (req, res, next) => {
  const user = req.query.user;
  if (user) {
    if (admins.findIndex((admin) => admin == user) != -1) next();
    else res.send("No tienes los privilegios para ingresar");
  } else {
    res.send("No tienes los privilegios para ingresar");
  }
};

module.exports = adminAuth;
