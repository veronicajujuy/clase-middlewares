const mainController = {
  showIndex: (req, res) => {
    res.render("index");
  },
  adminLogAuth: (req, res) => {
    res.send("Hola Admin: " + req.query.user);
  },
};

module.exports = mainController;
