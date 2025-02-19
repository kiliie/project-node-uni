import app from "./app";
import { ServerBooststrap } from "./boostrap/server.boostrap";

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
        const instances = [serverBooststrap.initialize()];
        await Promise.all(instances);
    }catch (error){
        console.error(error);
    }
})();