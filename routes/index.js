"use strict";
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const Controller = require("../controllers/controller");
const authentication = require("../middlewares/authentication");
const sendEmail = require("../middlewares/nodemailer");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.get("/heroes", Controller.getHero);
router.get("/items", Controller.getItems);

router.use(authentication);

router.post("/builds", Controller.createBuild);
router.get("/builds", Controller.getBuilds);
router.patch("/builds/:id", Controller.votting);

module.exports = router;
