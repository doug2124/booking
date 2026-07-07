const express=require("express");
const router=express.Router();
const accommodationController=require("../controllers/accommodationController");
const upload = require("../uploads");

router.get("/",accommodationController.getAccommodation);
router.get("/:id",accommodationController.getAccommodationById);
router.post("/",upload.single("photo"),accommodationController.createAccommodation);
router.delete("/:id",accommodationController.deleteAccommodation);
router.patch("/:id",accommodationController.updateAccommodation);

module.exports=router;