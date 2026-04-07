const prisma=require("../../db");

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
        data
    });
};

const deleteAccommodation=async(id)=>{
    return prisma.accommodation.delete({
        where:{id:Number(id)}
    });
};

module.exports={
    getAccommodation,
    getAccommodationById,
    createAccommodation,
    deleteAccommodation
};