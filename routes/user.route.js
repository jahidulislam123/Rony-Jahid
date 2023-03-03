
const express  = require("express");
const { getUser, postUsers } = require("../controllers/users.controller");
const router =express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  router.get("/users",getUser);
  
  
  router.post("/users",postUsers);

  module.exports =router;