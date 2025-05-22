// website/new/...
const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req,res) => {
  res.render("form");
});

newRouter.post("/", (req,res) => {
  messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
  req.redirect("/");
});