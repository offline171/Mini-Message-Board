// routes/newRouter.js
const { Router } = require("express");
const db = require("../db");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req,res) => {
  db.pushMessages({ text: req.body.msgtext, user: req.body.msguser, added: new Date() });
  res.redirect("/");
});

module.exports = newRouter;