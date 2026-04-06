const userService=require("../services/userService");

exports.getUsers= async(req,res)=>{
    const users= await userService.getUsers();
    res.json(users);
};
exports.createUser=async(req,res)=>{
    try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};