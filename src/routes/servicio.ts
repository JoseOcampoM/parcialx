import { Request, Response, Application } from 'express';

import { ServicioController } from '../controllers/servicio.controller';

export class ServicioRoutes {
    public servicioController: ServicioController = new ServicioController();
    
    public routes(app: Application): void{
        app.route("/servicios").get(this.servicioController.getAllServicio)
        app.route("/servicio/:id").get(this.servicioController.getOneServicio)
        app.route("/crearservicio").post(this.servicioController.createServicio)
        app.route("/actuaservicio/:id").patch(this.servicioController.updateServicio)
        app.route("/delservicio/:id").patch(this.servicioController.deleteServicio)

    }
}