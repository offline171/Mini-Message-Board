// routes/indexRouter.js
const { Router } = require("express");
const db = require("../db");
const { getindexById } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: db.messages });
});

indexRouter.get("/:indexId", getindexById);

module.exports = indexRouter;