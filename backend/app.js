const express = require("express");
const prisma =require("./db");
const cors= require('cors');
const app= express();
const upload = require("./src/uploads.js");
const path = require("path");

const userRoutes=require("./src/routes/userRoutes");
const bookingRoutes=require("./src/routes/bookingRoutes");
const accommodationRoutes=require("./src/routes/accommodationRoutes");

const PORT = 3000;
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use("/users",userRoutes);
app.use("/bookings",bookingRoutes);
app.use("/accommodations",accommodationRoutes);
app.use(express.json());

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Express is running at port: ${PORT}`);
})
