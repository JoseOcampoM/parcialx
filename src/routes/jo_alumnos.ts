import { Request, Response, Application } from 'express';

import { Jo_alumnoController } from '../controllers/Jo_alumnos.controller';

export class Jo_alumnoRoutes{
    public jo_alumnoController: Jo_alumnoController = new Jo_alumnoController();

    public routes(app: Application): void{
        app.route("/alumnos").get(this.jo_alumnoController.getAllAlumno)
        app.route("/createalumno").post(this.jo_alumnoController.createAlumno)
    }
}