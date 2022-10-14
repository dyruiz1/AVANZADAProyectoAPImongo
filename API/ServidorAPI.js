import express from 'express'; // esta descargado de forma global
import { rutasPersonalizadas } from '../Routes/rutas.js';
import { conectarConMongo } from '../Database/conexion.js';

export class ServidorAPI {
  constructor() {
    // app es la Variables que almacena toda la funcionalidad de Express
    this.app = express();
    this.conectarConBD();
    this.activarBody();
    this.atenderPeticiones();
  }

  //MÉTODOS de la clase servidor
  despertarServidor() {
    // carretera para ejecutar codigo, puerto 3000
    this.app.listen(process.env.PORT, function () {
      console.log('exito ENCENDIENDO servidor en el puerto: ' + process.env.PORT);
    });
  }

  atenderPeticiones() {
    this.app.use('/', rutasPersonalizadas);
  }

  conectarConBD() {
    conectarConMongo();
  }

  activarBody() {
    this.app.use(express.json());
  }
}
