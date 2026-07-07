const prisma=require("../../db");
const { Prisma } = require("@prisma/client");

const getAccommodation=async()=>{
    return await prisma.accommodation.findMany();
};

const getAccommodationById=async(id)=>{
    return await prisma.accommodation.findUnique({
        where:{id:Number(id)}
    });
};

const createAccommodation=async(data)=>{
    return await prisma.accommodation.create({
        data: {
            accommodation_name: data.accommodation_name,
            address: data.address,
            city: data.city,
            type: data.type,
            rooms: Number(data.rooms),
            price: new Prisma.Decimal(data.price),
            photo: data.photo  
        }
    });
};

const deleteAccommodation=async(id)=>{
    return prisma.accommodation.delete({
        where:{id:Number(id)}
    });
};
const updateAccommodation = async (id, data) => {
    return prisma.accommodation.update({
      where: { id: Number(id) },
      data: {
        accommodation_name: data.accommodation_name,
        address: data.address,
        city: data.city,
        type: data.type,
        rooms: Number(data.rooms),
        price: new Prisma.Decimal(data.price),
      }
    });
  };
  

module.exports={
    getAccommodation,
    getAccommodationById,
    createAccommodation,
    deleteAccommodation,
    updateAccommodation
};