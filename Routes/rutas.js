//archivo de enrutamiento, rutas separadas para personalziar los archivos
//los datos que se llevan por URL ojala 1 y no datos sensibles body
//se mandaN DATOS que se llaman parametro como usuarios

import express from 'express'; // esta descargado de forma global

import { ControladorHabitacion } from '../Controlers/ControladorHabitacion.js';
import { ControladorReservas } from '../Controlers/ControladorReservas.js';

//como es una clase entonces se debe usar
let controladorHabitacion = new ControladorHabitacion(); // usando el controlador
let controladorReserva = new ControladorReservas(); // usando el controlador

//separa la ruta de peticion y respuesta por diferente lado
export let rutasPersonalizadas = express.Router();

rutasPersonalizadas.get('/hoteleslospolloshermanos/habitaciones', controladorHabitacion.buscarHabitaciones);
rutasPersonalizadas.get('/hoteleslospolloshermanos/habitacion/:idHabitacion', controladorHabitacion.buscarHabitacionPorId);
rutasPersonalizadas.post('/hoteleslospolloshermanos/habitacion', controladorHabitacion.registrarHabitacion);
rutasPersonalizadas.put('/hoteleslospolloshermanos/habitacion/:idHabitacion', controladorHabitacion.editarHabitacion);

rutasPersonalizadas.get('/hoteleslospolloshermanos/reservas', controladorReserva.buscarReservas);
rutasPersonalizadas.get('/hoteleslospolloshermanos/reserva/:idReserva', controladorReserva.buscarReservaPorId);
rutasPersonalizadas.post('/hoteleslospolloshermanos/reserva', controladorReserva.registrarReserva);
rutasPersonalizadas.put('/hoteleslospolloshermanos/reserva/:idReserva', controladorReserva.editarReserva);
rutasPersonalizadas.delete('/hoteleslospolloshermanos/reserva/:idReserva', controladorReserva.eliminaReserva);
