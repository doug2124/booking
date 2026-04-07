const accommodationService=require("../services/accommodationService");

const getAccommodation=async(req,res)=>{
    const accommodation=await accommodationService.getAccommodation();
    res.json(accommodation);
};

const createAccommodation=async(req,res)=>{
    try{
        const accommodation=await accommodationService.createAccommodation(req.body);
        res.status(201).json(accommodation);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

const getAccommodationById=async(req,res)=>{
    try{
        const accommodation=await accommodationService.getAccommodationById(req.params.id);
        if(!accommodation) return res.status(404).json({error:'Accommodation not found'});
        res.json(accommodation);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const deleteAccommodation=async(req,res)=>{
    const accommodation=await accommodationService.deleteAccommodation(req.params.id);
    if(!accommodation) return res.status(404).json({error:'Accommodation not found'});
    res.json(accommodation);
};

module.exports={
    getAccommodation,
    createAccommodation,
    getAccommodationById,
    deleteAccommodation
};