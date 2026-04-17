const express=require("express");
const router=express.Router();
const userController=require("../controllers/userController");

router.get("/",userController.getUsers);
router.get("/:id",userController.getUserById);
router.post("/",userController.createUser);
router.delete("/:id",userController.deleteUserById);
router.patch("/:id",userController.updateUser);

module.exports=router;