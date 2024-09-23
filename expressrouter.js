// router
const express = require("express");
const { getallusers,getuser,createuser,updateuser,deleteuser} = require("./controller/expresscontroler");

const router = express.Router();
  // Display All Users
  router.get("/users", getallusers );
  // Display a Particular user
  router.get("/users/:id", getuser);
  // Create a User
  router.post("/user", createuser  );
  // Update a Particular user
  router.patch("/user/:id", updateuser );
  // Delete a Particular User
  router.delete("/user/:id", deleteuser );
  
  module.exports =  router;