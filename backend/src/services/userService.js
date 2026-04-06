const userRepository=require("../repositories/userRepository");

const createUser = async (data) => {
    return await userRepository.createUser(data);
  };
  
  const getUsers = async () => {
    return await userRepository.getUsers();
  };
  
  module.exports = {
    createUser,
    getUsers
  };