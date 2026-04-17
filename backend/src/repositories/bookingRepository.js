const prisma = require("../../db");

const findAll = () => {
     return prisma.reservation.findMany();
};

const findByDate = (date) => {
    return prisma.reservation.findFirst({
    where: { date },
    });
};
const create = (data) => {
    return prisma.reservation.create({
    data,
    });
};
const getBookingById = async (id) => {
    return prisma.reservation.findUnique({
      where: { id: Number(id) }
    });
  };
const updateBooking=async(id,data)=>{
  return prisma.reservation.update({
    where:{id:Number(id)},
    data
  });
};
module.exports={
  findAll,
  findByDate,
  create,
  getBookingById,
  updateBooking
};