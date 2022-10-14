//app va a despertar el servidor
//traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv' //
dotenv.config()

import { ServidorAPI } from './API/ServidorAPI.js'

let servidorHoteles = new ServidorAPI()
servidorHoteles.despertarServidor() //instancias una clase es decir crear un objeti


