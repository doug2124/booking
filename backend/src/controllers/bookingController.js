const bookingService=require("../services/bookingService");

exports.getBookings= async(req,res)=>{
    const booking= await bookingService.getBookings();
    res.json(booking);
};
exports.createBooking=async(req,res)=>{
    try{
    const booking=await bookingService.createBooking(req.body);
    res.status(201).json(booking);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
      }
};

exports.getBookingById=async(req,res)=>{
    try {
        const booking = await bookingService.getBookingById(req.params.id);
        if (!booking) return res.status(404).json({ error: 'Reservation not found' });
        res.json(booking);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}