//Proentar a Objetos
import express, {Request, Response} from "express";
class App{
    private app: express.Application;
    constructor(){
        this.app = express();
        this.routes();
    }
    private routes():void{
        this.app.get("/",(req: Request,res: Response)=>{
            res.send("Hello World\n");
        });
        this.app.get("/healtcheck",(req,res)=>{
            res.send("Todo OK:200\n");
        });
        
    }
    getApp(){
        return this.app;
    }
}
export default new App().getApp();

