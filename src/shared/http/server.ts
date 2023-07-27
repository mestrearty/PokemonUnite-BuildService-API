import express, { Response, Request, NextFunction } from 'express';
import { errors } from 'celebrate';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import routes from './routes';

export default class Server {

    private static port: number;
    private static serverApp: any;

    constructor(port: number = 9083) {
        Server.port = port;
    }

    public runServer(port?: number): void {
        if (!port) port = Server.port;
        const app = express();
        Server.serverApp = app;

        //middlewares
        app.use(routes); //gerenciador de rotas
        app.use(express.json());//Parser para ler em padrão JSON
        app.use(errors()); // validador de erros pelo celebrate

        //Esposta em caso de erro de requisição
        app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({
                    status: 'error',
                    message: error.message
                });
            } return response.status(500).json({
                status: 'error',
                message: "Internal server error"
            });
        });

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        //iniciando servidor
        app.listen(port, () => { console.log(`Server started on port ${port}`); });
    }
}






