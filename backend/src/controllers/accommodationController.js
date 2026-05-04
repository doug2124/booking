const accommodationService=require("../services/accommodationService");

const getAccommodation = async (req, res) => {
    try {
      const accommodation = await accommodationService.getAccommodation();
      res.status(200).json(accommodation);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch accommodations" });
    }
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

const deleteAccommodation = async (req, res) => {
    try {
      const id = Number(req.params.id);
  
      const deleted = await accommodationService.deleteAccommodation(id);
  
      res.status(200).json({ message: "deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete accommodation" });
    }
  };
  

const updateAccommodation = async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
  
      const updatedAccommodation = await accommodationService.updateAccommodation(id, data);
  
      res.status(200).json(updatedAccommodation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update accommodation" });
    }
  };
  

module.exports={
    getAccommodation,
    createAccommodation,
    getAccommodationById,
    deleteAccommodation,
    updateAccommodation
};