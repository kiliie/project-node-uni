import "./infraestructure/config/environment-vars";
import app from "./infraestructure/web/app";
import { ServerBooststrap } from "./infraestructure/boostrap/server.boostrap";
import {connectDB } from "./infraestructure/config/data_base";

const serverBooststrap = new ServerBooststrap(app);

/*clásica
async function starServer(){
    try{
        const instances = [serverBooststrap.initialize()];
        await Promise.all(instances);
    }catch (error){
        console.error(error);
    }
}
starServer();

/**
 * Función tipo flecha y uso de async - await
 

const start = async ()=>{
    try{
        const instances = [serverBooststrap.initialize()];
        await Promise.all(instances);
    }catch (error){
        console.error(error);
    }
}
start();*/

/**Función auto invocada */
(async ()=>{
    try{
        await connectDB(); //Conectar a la BD antes de Inicializar el servidor
        const instances = [serverBooststrap.initialize()];
        await Promise.all(instances);
    }catch (error){
        console.error(error);
        process.exit(1);
    }
})();