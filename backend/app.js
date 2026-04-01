const express = require("express");
const prisma =require("./db");

const app= express();

const PORT = 3000;
app.use(express.json());

app.listen(PORT,function(){
    console.log(`Express is running at port: ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`its working at port 3000`);
});

app.get("/users", async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (err) {
      console.error("ERROR:", err);
      res.status(500).send("erro no servidor");
    }
  });
app.get("/inn",async(req,res)=>{
  try{
    const inn= await prisma.inn.findMany();
    res.json(inn);
  }catch(err){
    console.error("ERROR:",err);
    res.status(500).send("server error");
  }
})