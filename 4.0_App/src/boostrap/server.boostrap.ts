import express from 'express';
import http from 'http';

export class ServerBooststrap{
    private app: express.Application;
    constructor(app: express.Application){
        this.app = app;
    }
    initialize(){
        const server = http.createServer(this.app);
        const PORT = process.env.PORT || 4000;
        server.listen(PORT,()=>{
            console.log(`Server On http://localchost:${PORT}`);
        });
    }
}