const userRepository=require("../repositories/userRepository");

const createUser = async (data) => {
    return await userRepository.createUser(data);
  };
  
  const getUsers = async () => {
    return await userRepository.getUsers();
  };
  const getUserById=async(id)=>{
    return userRepository.getUserById(id);
  }
  
  module.exports = {
    createUser,
    getUsers,
    getUserById
  };