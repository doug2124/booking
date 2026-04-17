const express=require("express");
const router=express.Router();
const accommodationController=require("../controllers/accommodationController");

router.get("/",accommodationController.getAccommodation);
router.get("/:id",accommodationController.getAccommodationById);
router.post("/",accommodationController.createAccommodation);
router.delete("/:id",accommodationController.deleteAccommodation);
router.patch("/:id",accommodationController.updateAccommodation);

module.exports=router;