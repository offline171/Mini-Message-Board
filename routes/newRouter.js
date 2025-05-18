// website/new/...
const { Router } = require("express");

const newRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

newRouter.get("/", (req,res) => res.send(messages));
