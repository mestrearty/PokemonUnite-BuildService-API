import express, { Response, Request, NextFunction } from 'express';

export default class Server {

    private static port: number;
    private static serverApp: any;

    constructor(port: number) {
        Server.port = port;
        console.log(Server.port);
    }

    public runServer(port?: number): void {
        if (!port) port = Server.port;
        const app = express();
        Server.serverApp = app;

        app.listen(port, () => { console.log(`Server started on port ${port}`); });
    }
}






