const express = require("express");
const mainController = require("../controllers/mainController");
const adminAuth = require("../middlewares/adminAuthMiddleware");
const mainRouter = express.Router();

mainRouter.get("/", mainController.showIndex);
mainRouter.get("/admin", adminAuth, mainController.adminLogAuth);

module.exports = mainRouter;
