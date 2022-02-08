const express = require('express');
const cors = require('cors');

const { db } = require('../database/config');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            empresas: '/api/empresas'
        }

        //CONECTAR A DB
        this.conectarDB();

        // MIDDLEWARES
        this.middlewares();

        // RUTAS API
        this.routes();

    }

    async conectarDB() {

        try{

            await db.authenticate();
            console.log('DB online');

        }catch(e){

            throw new Error(e);

        }

    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //LECTURA Y PARSEO DEL BODY
        this.app.use( express.json() );

        //DIRECTORIO PÚBLICO
        this.app.use( express.static('public') );

    }


    routes() {

        this.app.use( this.paths.empresas, require('../routes/empresas') );

    }

    listen() {

        this.app.listen( this.port, () => {

            console.log(`Servidor escuchando en el puerto ${this.port}`);

        });

    }

}

module.exports = Server;