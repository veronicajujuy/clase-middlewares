const fs = require("fs");
const path = require("path");
const userLogs = (req, res, next) => {
  const mensaje = `El usuario ingreso a la ruta: ${req.url} \n`;
  const filePath = path.join(__dirname, "../logs/userLogs.txt");
  fs.appendFileSync(filePath, mensaje, "utf-8");
  next();
};

module.exports = userLogs;
