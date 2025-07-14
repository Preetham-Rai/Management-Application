import express, { Application, Request, Response } from "express";
import { AppConstants } from "./constants/app.constants.ts";

class Server {
    private app: Application;

    constructor() {
        this.app = express();
    }

    start(){
        this.app.get('/', (req : Request, res : Response) => {
            res.send('This is from the Typescript NodeJS server')
        })
        .listen(AppConstants.PORT_NUMBER, () => {
            console.log('Server is Running in port number ' + AppConstants.PORT_NUMBER)
        })
    }
}

export default Server;