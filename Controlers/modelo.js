
    constructor(){}

    //buscar habitaciones
    async buscarReservas(request,response){

        //llamo al servicio
        let servicioReserva=new ServicioReserva()

        //Intento resolver la PETICION
        try{
            response.status(200).json({
            mensaje:"exito en la consulta",
           
            datos:await servicioReserva.buscarTodas()
           }) 
        }catch(error){ //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
            })
        }
    }

    //buscar habitacion por id
    async buscarReservasPorId(request,response){
        let identificador=request.params.id
        
        //Llamo al servicio habitaciones
        let servicioReserva=new ServicioReserva()

        try{
            response.status(200).json({
                mensaje:"exito en la consulta "+identificador,
                datos: await servicioReserva.buscarPorId(identificador)
            }) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //agregar habitacion
    async agregarReserva(request,response){
        let cuerpo=request.body

        //Llamo al servicio habitaciones
        let servicioReserva=new ServicioReserva()
        let servicioHabitacion=new ServicioHabitacion()
        
        try{

            let habitacion=await servicioHabitacion.buscarPorId(cuerpo.idHabitacion)

            if(habitacion){

                let numeroDias=(new Date(cuerpo.fechaSalida)-new Date(cuerpo.fechaEntrada))/(1000 * 3600 * 24)
                cuerpo.valorReserva=numeroDias*habitacion.valorNoche
                

                await servicioReserva.agregar(cuerpo)
                response.status(200).json({
                    mensaje:"exito agregando la reserva",
                    datos:null
                }) 

            }else {
                response.status(400).json({
                    mensaje:"la habitacion no esta disponible",
                    datos:null
                })
            }

            
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response.status(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //editar habitacion
    async editarReserva(request,response){

        //recibir id como parametro
        let id=request.params.id

        //recibir los datos con los que voy a editar (BODY)
        let datos=request.body

        //Llamo al servicio habitaciones
        let servicioReserva=new ServicioReserva()

        try{
            await servicioReserva.actualizar(id,datos)
            response.status(200).json({
                mensaje:"exito editando la reserva "+id,
                datos:null
            }) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }

    }

    //eliminar reserva
    async eliminarReserva(request,response){

        //recibir id como parametro
        let id=request.params.id


        //Llamo al servicio habitaciones
        let servicioReserva=new ServicioReserva()

        try{
            await servicioReserva.eliminar(id)
            response.status(200).json({
                mensaje:"exito elimiando la reserva "+id,
                datos:null
            }) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }

    }

    

}