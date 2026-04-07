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
      where: { id: Number(id) },
      include: { inn: true },
    });
  };
module.exports={
  findAll,
  findByDate,
  create,
  getBookingById
};