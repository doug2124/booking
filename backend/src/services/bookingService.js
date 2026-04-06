const bookingRepository=require("../repositories/bookingRepository");

exports.getBookings=()=>{
    return bookingRepository.findAll();
};

exports.createBooking=async (data)=>{
    return bookingRepository.create(data);
};
exports.getBookingById = async (id) => {
    return bookingRepository.getBookingById(id);
  };