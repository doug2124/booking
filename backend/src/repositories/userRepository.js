const prisma = require("../../db");

const createUser = async (data) => {
    return await prisma.user.create({
      data
    });
  };
  
  const getUsers = async () => {
    return await prisma.user.findMany();
  };
  const getUserById=async(id)=>{
    return prisma.user.findUnique({
      where:{id:Number(id)}
    });
  };
  
  module.exports = {
    createUser,
    getUsers,
    getUserById
  };