// controllers/indexController.js

const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getindexById = asyncHandler(async (req, res) => {
  const { indexId } = req.params;
  
  const index = await db.messages;

  if (indexId >= index.length) {
    throw new CustomNotFoundError("index not found");
  }

  res.render("single", {message: index[indexId]})
});

module.exports = { getindexById };
