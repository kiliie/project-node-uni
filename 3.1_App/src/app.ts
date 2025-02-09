//aquí colocamos las rutas
import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World\n");
});
app.get("/healtcheck",(req,res)=>{
    res.send("Todo OK:200\n");
});

export default app;

