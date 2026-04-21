const express = require("express");
const prisma =require("./db");
const cors= require('cors');
const app= express();

const userRoutes=require("./src/routes/userRoutes");
const bookingRoutes=require("./src/routes/bookingRoutes");
const accommodationRoutes=require("./src/routes/accommodationRoutes");

const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use("/users",userRoutes);
app.use("/bookings",bookingRoutes);
app.use("/accommodations",accommodationRoutes);

app.listen(PORT,()=>{
    console.log(`Express is running at port: ${PORT}`);
})
