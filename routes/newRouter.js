// routes/newRouter.js
const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.get("/enter", (req, res) => {
  messages.push({ text: "testing 123", user: "NHBlis", added: new Date() });
  req.redirect("/");
});

newRouter.post("/", (req,res) => {
  messages.push({ text: msgtext, user: msguser, added: new Date() });
  req.redirect("/");
});

module.exports = newRouter;