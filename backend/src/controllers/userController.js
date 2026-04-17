const userService=require("../services/userService");

const getUsers= async(req,res)=>{
    const users= await userService.getUsers();
    res.json(users);
};
const createUser=async(req,res)=>{
    try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById=async(req,res)=>{
  try{
    const user=await userService.getUserById(req.params.id);
    if(!user) return res.status(404).json({error:"User not found"});
    res.json(user);
  }catch(err){
    res.status(500).json({error:err.message});
  }
}
const deleteUserById=async(req,res)=>{
  const user=await userService.deleteUserById(req.params.id);
  if(!user) return res.status(404).json({error:"User not found"});
  res.json(user);
}

const updateUser=async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const updatedUser = await userService.updateUser(id, data);
    res.status(500).json(updatedUser);
}
module.exports={
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUser
};