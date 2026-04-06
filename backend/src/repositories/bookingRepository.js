const prisma = require("../../db");

exports.findAll = () => {
     return prisma.reservation.findMany();
};

exports.findByDate = (date) => {
    return prisma.reservation.findFirst({
    where: { date },
    });
};
exports.create = (data) => {
    return prisma.reservation.create({
    data,
    });
};
exports.getBookingById = async (id) => {
    return prisma.reservation.findUnique({
      where: { id: Number(id) },
      include: { inn: true },
    });
  };