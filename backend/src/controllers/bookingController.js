const bookingService=require("../services/bookingService");

const getBookings= async(req,res)=>{
    const booking= await bookingService.getBookings();
    res.json(booking);
};
const createBooking=async(req,res)=>{
    try{
    const booking=await bookingService.createBooking(req.body);
    res.status(201).json(booking);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
      }
};

const getBookingById=async(req,res)=>{
    try {
        const booking = await bookingService.getBookingById(req.params.id);
        if (!booking) return res.status(404).json({ error: 'Reservation not found' });
        res.json(booking);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

const updateBooking=async(req,res)=>{
  const id = req.params.id;
  const data = req.body;
  const updatedBooking=await bookingService.updateBooking(id,data);
  res.status(500).json(updatedBooking);
}

const confirmBooking=async(req,res)=>{
  const booking= await bookingService.confirmBooking(req.params.id);
  res.json(booking);
}

const cancelBooking=async(req,res)=>{
  const booking=await bookingService.cancelBooking(req.params.id);
  res.json(booking);
}
module.exports={
  getBookings,
  createBooking,
  getBookingById,
  updateBooking,
  confirmBooking,
  cancelBooking
};
