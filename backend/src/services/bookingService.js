const bookingRepository=require("../repositories/bookingRepository");

const getBookings=()=>{
    return bookingRepository.findAll();
};

const createBooking=async (data)=>{
    return bookingRepository.create(data);
};
const getBookingById = async (id) => {
    return bookingRepository.getBookingById(id);
  };

module.exports={
    getBookings,
    createBooking,
    getBookingById
};