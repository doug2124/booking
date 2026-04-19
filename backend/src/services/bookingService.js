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

const confirmBooking=async(id)=>{
    return bookingRepository.confirmBooking(id);
}
const cancelBooking=async(id)=>{
    return bookingRepository.cancelBooking(id);
}

module.exports={
    getBookings,
    createBooking,
    getBookingById,
    updateBooking,
    confirmBooking,
    cancelBooking
};