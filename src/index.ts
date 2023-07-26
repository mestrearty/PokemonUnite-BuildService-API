import Server from "@shared/http/server";

const _envPort = 9083; //preparando para receber do .env

const server = new Server(_envPort);//criando o servidor

server.runServer(); //rodando o serviço
