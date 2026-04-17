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
const updateBooking=async(id,data)=>{
    return bookingRepository.updateBooking(id,data);
}

module.exports={
    getBookings,
    createBooking,
    getBookingById,
    updateBooking
};